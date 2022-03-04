import { gql } from "@apollo/client";

const ADD_USER = gql`
 mutation AddUser($email: String!, $name: String!, $avatar: String) {
  addUser(email: $email, name: $name, avatar: $avatar) {
    id
    email
    avatar
    name
  }
}
`;

export default ADD_USER