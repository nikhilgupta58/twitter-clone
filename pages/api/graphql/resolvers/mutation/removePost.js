import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const removePost = {
  Mutation: {
    removePost: async (_, args, __) => {
      await prisma.post.delete({
        where: {
          id: args.postId,
        },
      });
      return {
        message: "Post Removed Successfully",
      };
    },
  },
};

export default removePost;
