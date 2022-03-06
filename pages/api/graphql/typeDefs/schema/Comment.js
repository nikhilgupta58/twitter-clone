import { gql } from "apollo-server-micro";

const Comment = gql`
  type Comment {
    id: ID!
    message: String!
    postId: String!
    userId: String!
    createdAt: String!
    user: User!
    like: [Like!]!
  }
`;

export default Comment;
