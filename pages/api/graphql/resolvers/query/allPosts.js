import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const allPosts = {
  Query: {
    allPosts: async () => {
      return await prisma.post.findMany({
        orderBy: [
          {
            createdAt: "desc",
          },
        ],
        include: {
          like: {
            postId: prisma.post.id,
          },
          user: {
            postId: prisma.post.id,
          },
          comment: {
            orderBy: [
              {
                createdAt: "desc",
              },
            ],
            postId: prisma.post.id,
          },
        },
      });
    },
  },
};

export default allPosts;
