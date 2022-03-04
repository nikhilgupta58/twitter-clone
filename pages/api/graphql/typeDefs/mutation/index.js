import { gql } from "apollo-server-micro";

const Mutation = gql`
  type response {
    message: String!
  }

  type Mutation {
    addUser(email: String!, avatar: String, name: String!): User

    addPost(
      body: String!
      userId: String!
      createdAt: String!
      image: String
    ): response

    addLike(
      createdAt: String!
      userId: String!
      postId: String
      commentId: String
    ): response

    addComment(
      createdAt: String!
      userId: String!
      postId: String!
      message: String!
    ): response

    removeLike(userId: String!, postId: String, commentId: String): response

    removeComment(commentId: String!): response

    removePost(postId: String!): response
  }
`;

export default Mutation;
