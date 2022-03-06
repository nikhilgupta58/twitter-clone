import { PrismaClient } from "@prisma/client";
import allPosts from "./allPosts";
import allUsers from "./allUsers";
import getPost from "./getPost";
const prisma = new PrismaClient();

const Query = [allUsers, allPosts, getPost];

export default Query;
