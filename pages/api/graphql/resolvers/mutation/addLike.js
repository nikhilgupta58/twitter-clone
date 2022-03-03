import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addLike = {
  Mutation: {
    addLike: async (_, args, __) => {
      await prisma.like.create({
        data: {
          userId: args.userId,
          postId: args.postId,
          createdAt: args.createdAt,
          commentId: args.commentId,
        },
      });
      return {
        message: "Liked Successully",
      };
    },
  },
};

export default addLike;
