import { gql } from "@apollo/client";

const REMOVE_LIKE = gql`
mutation AddComment($userId: String!, $postId: String, $commentId: String) {
  removeLike(userId: $userId, postId: $postId, commentId: $commentId) {
    message
  }
}
`;

export default REMOVE_LIKE