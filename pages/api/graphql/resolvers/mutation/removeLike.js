import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const removeLike = {
  Mutation: {
    removeLike: async (_, args, __) => {
      const like = await prisma.like.findFirst({
        where: {
          userId: args.userId,
          postId: args.postId,
          commentId: args.commentId,
        },
      });
      await prisma.like.delete({
        where: {
          id: like.id,
        },
      });
      return {
        message: "Like Removed Successfully",
      };
    },
  },
};

export default removeLike;
