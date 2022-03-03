import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const allUsers = {
  Query: {
    allUsers: async () => {
      return await prisma.user.findMany({
        include: {
          post: {
            where: {
              userId: prisma.user.userId,
            },
          },
          like: {
            where: {
              userId: prisma.user.userId,
            },
          },
          comment: {
            where: {
              userId: prisma.user.userId,
            },
          },
        },
      });
    },
  },
};

export default allUsers;
