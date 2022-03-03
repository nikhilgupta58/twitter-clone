import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addPost = {
  Mutation: {
    addPost: async (_, args, __) => {
      await prisma.post.create({
        data: {
          body: args.body,
          userId: args.userId,
          createdAt: args.createdAt,
          image: args.image,
        },
      });
      return {
        message: "Post added",
      };
    },
  },
};

export default addPost;
