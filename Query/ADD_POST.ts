import { gql } from "@apollo/client";

const ADD_POST = gql`
mutation Mutation($body: String!, $userId: String!, $createdAt: String!, $image: String) {
  addPost(body: $body, userId: $userId, createdAt: $createdAt, image: $image) {
    message
  }
}
`;

export default ADD_POST