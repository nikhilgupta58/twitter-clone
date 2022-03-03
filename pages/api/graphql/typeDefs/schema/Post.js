import { gql } from "apollo-server-micro";

const Post = gql`
  type Post {
    id: ID!
    body: String!
    image: String
    userId: String!
    createdAt: String!
    like: [Like]
    user: User
    comment: [Comment]
  }
`;

export default Post;
