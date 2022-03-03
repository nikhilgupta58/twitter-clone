import { PrismaClient } from "@prisma/client";
import allPosts from "./allPosts";
import allUsers from "./allUsers";
const prisma = new PrismaClient();

const Query = [allUsers, allPosts];

export default Query;
