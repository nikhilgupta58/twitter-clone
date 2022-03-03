import { PrismaClient } from "@prisma/client";
import Query from "./query";
import Mutation from "./mutation";

const prisma = new PrismaClient();

const resolvers = [Query, Mutation];

export default resolvers;
