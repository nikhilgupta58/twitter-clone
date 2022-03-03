import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addComment = {
  Mutation: {
    addComment: async (_, args, __) => {
      await prisma.comment.create({
        data: {
          message: args.message,
          userId: args.userId,
          createdAt: args.createdAt,
          postId: args.postId,
        },
      });
      return {
        message: "Commented Successully",
      };
    },
  },
};

export default addComment;
