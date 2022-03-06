import { gql } from "@apollo/client";

const GET_POST = gql`
query GetPost($postId: String!) {
  getPost(postId: $postId) {
    id
      body
      image
      userId
      createdAt
      like {
        id
        userId
      }
      user {
        id
        email
        avatar
        name
      }
      comment {
        id
        message
        createdAt
        user {
          id
          email
          avatar
          name
        }
        like {
          id
          userId
        }
      }
  }
}

`;

export default GET_POST