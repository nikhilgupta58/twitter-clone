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
        return await prisma.user.update({
          where: {
            email: args.email,
          },
          data: {
            email: args.email,
            avatar: args.avatar,
            name: args.name,
          },
        });
      }
      return await prisma.user.create({
        data: {
          email: args.email,
          avatar: args.avatar,
          name: args.name,
        },
      });
    },
  },
};

export default addUser;
