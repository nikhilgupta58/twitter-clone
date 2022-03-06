import { gql } from "@apollo/client";

const REMOVE_COMMENT = gql`
mutation Mutation($commentId: String!) {
    removeComment(commentId: $commentId) {
      message
    }
  }
`;

export default REMOVE_COMMENT