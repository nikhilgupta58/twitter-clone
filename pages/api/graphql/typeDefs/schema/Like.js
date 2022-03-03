import { gql } from "apollo-server-micro";

const Like = gql`
  type Like {
    id: ID!
    postId: String
    userId: String!
    createdAt: String!
    commentId: String
  }
`;

export default Like;
