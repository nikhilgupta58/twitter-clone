import { gql } from "apollo-server-micro";

const Query = gql`
  type Query {
    allPosts: [Post]
    allUsers: [User]
    getPost(postId: String!): Post
  }
`;

export default Query;
