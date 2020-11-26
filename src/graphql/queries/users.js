import { gql } from '@apollo/client';

export const getALlUsers = gql`
  query GetALlUsers {
    users {
      id
      lastname
      firstname
      email
      role
      avatarUrl
      status
    }
  }
`;

export const getMyAccount = gql`
  query GetMyAccount {
    myAccount {
      id
      lastname
      firstname
      email
      role
      avatarUrl
      address {
        address
        lat
        lng
      }
      groups {
        id
        name
      }
      ledGroups {
        id
        name
      }
      categories {
        id
        title
      }
    }
  }
`;

export const getUserById = gql`
  query GetUserById($id: String) {
    user(id: $id) {
      id
      name
      firstname
      email
    }
  }
`;

export const updateUserStatus = gql`
  mutation UpdateUserStatus($input: UpdateUserStatusInput!) {
    updateUserStatus(input: $input) {
      errors
      user {
        id
        status
      }
    }
  }
`;
