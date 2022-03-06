import { gql } from "@apollo/client";

const ALL_POST = gql`
 query AllPosts {
    allPosts {
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
        }
      }
    }
  }

`;

export default ALL_POST