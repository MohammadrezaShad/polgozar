import { gql } from '@apollo/client';

export default gql`
  extend type Query {
    loggedInState: Boolean!
    loginModalVisible: Boolean!
    signupModalVisible: Boolean!
    userRole: String!
  }
`;
