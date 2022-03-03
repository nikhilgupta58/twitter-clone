import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const removePost = {
  Mutation: {
    removePost: async (_, args, __) => {
      await prisma.comment.deleteMany({
        where: {
          postId: args.postId,
        },
      });
      await prisma.like.deleteMany({
        where: {
          postId: args.postId,
        },
      });
      await prisma.post.delete({
        where: {
          id: args.postId,
        },
      });
      await prisma.like.deleteMany({
        where: {
          postId: null,
          commentId: null,
        },
      });
      return {
        message: "Post Removed Successfully",
      };
    },
  },
};

export default removePost;
