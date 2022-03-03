import { gql } from "apollo-server-micro";

const Query = gql`
  type Query {
    allPosts: [Post]
    allUsers: [User]
  }
`;

export default Query;
