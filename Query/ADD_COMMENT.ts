
import { gql } from "@apollo/client";

const ADD_COMMENT = gql`
mutation AddComment($createdAt: String!, $userId: String!, $postId: String!, $message: String!) {
    addComment(createdAt: $createdAt, userId: $userId, postId: $postId, message: $message) {
      message
    }
  }

`;

export default ADD_COMMENT