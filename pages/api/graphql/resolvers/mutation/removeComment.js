import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const removeComment = {
  Mutation: {
    removeComment: async (_, args, __) => {
      await prisma.comment.delete({
        where: {
          id: args.commentId,
        },
      });
      return {
        message: "Comment Removed Successfully",
      };
    },
  },
};

export default removeComment;
