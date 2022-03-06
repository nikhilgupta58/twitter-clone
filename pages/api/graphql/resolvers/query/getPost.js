import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getPost = {
  Query: {
    getPost: async (_, args, __) => {
      return await prisma.post.findUnique({
        where: {
          id: args.postId,
        },
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
            include: {
              user: {
                id: prisma.comment.userId,
              },
              like: {
                commentId: prisma.comment.id,
              },
            },
          },
        },
      });
    },
  },
};

export default getPost;
