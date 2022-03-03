import Query from "./query";
import User from "./schema/User";
import Comment from "./schema/Comment";
import Post from "./schema/Post";
import Like from "./schema/Like";
import Mutation from "./mutation";

const typeDefs = [Query, Mutation ,User, Comment, Like, Post];

export default typeDefs;
