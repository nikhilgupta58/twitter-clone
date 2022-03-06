import { gql } from "@apollo/client";

const ADD_LIKE = gql`
mutation AddComment($createdAt: String!, $userId: String!, $commentId: String, $postId: String) {
  addLike(createdAt: $createdAt, userId: $userId, commentId: $commentId, postId: $postId) {
    message
  }
}
`;

export default ADD_LIKE