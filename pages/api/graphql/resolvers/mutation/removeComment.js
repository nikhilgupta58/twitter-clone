import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const removeComment = {
  Mutation: {
    removeComment: async (_, args, __) => {
      const comment = await prisma.comment.findFirst({
        where: {
          userId: args.userId,
          postId: args.postId,
        },
      });
      await prisma.comment.delete({
        where: {
          id: comment.id,
        },
      });
      return {
        message: "Comment Removed Successfully",
      };
    },
  },
};

export default removeComment;
