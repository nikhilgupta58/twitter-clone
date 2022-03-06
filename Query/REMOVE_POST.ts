import { gql } from "@apollo/client";

const REMOVE_POST = gql`
mutation Mutation($postId: String!) {
    removePost(postId: $postId) {
      message
    }
  }
`;

export default REMOVE_POST