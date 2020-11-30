import { gql } from '@apollo/client';

export const getLoginModalVisibility = gql`
  query LoginModalVisibility {
    loginModalVisible @client
  }
`;

export const getSignupModalVisibility = gql`
  query SignupModalVisibility {
    signupModalVisible @client
  }
`;

export const getLoggedInState = gql`
  query LoggedInState {
    loggedInState @client
  }
`;

export const getUserRole = gql`
  query UserRole {
    userRole @client
  }
`;
