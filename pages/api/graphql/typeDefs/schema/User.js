import { gql } from "apollo-server-micro";

const User = gql`
  type User {
    id: ID!
    email: String!
    avatar: String
    name: String!
    post: [Post]
    like: [Like]
    comment: [Comment]
  }
`;

export default User;
