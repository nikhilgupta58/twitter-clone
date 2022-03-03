import { PrismaClient } from "@prisma/client";
import addPost from "./addPost";
import addUser from "./addUser";
import addLike from "./addLike";
import addComment from "./addComment";
import removeLike from "./removeLike";
import removeComment from "./removeComment";
import removePost from "./removePost";
const prisma = new PrismaClient();

const Mutation = [
  addUser,
  addPost,
  addLike,
  addComment,
  removeLike,
  removeComment,
  removePost,
];
export default Mutation;
