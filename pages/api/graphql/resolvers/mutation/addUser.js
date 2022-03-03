import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addUser = {
  Mutation: {
    addUser: async (_, args, __) => {
      const user = await prisma.user.findFirst({
        where: {
          email: args.email,
        },
      });
      if (user) {
        await prisma.user.update({
          where: {
            email: args.email,
          },
          data: {
            email: args.email,
            avatar: args.avatar,
            name: args.name,
          },
        });
        return {
          message: "User Updated Successfully",
        };
      }
      await prisma.user.create({
        data: {
          email: args.email,
          avatar: args.avatar,
          name: args.name,
        },
      });
      
      return {
        message: "User added Successfully",
      };
    },
  },
};

export default addUser;
