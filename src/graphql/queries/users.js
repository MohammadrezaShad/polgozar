import { gql } from '@apollo/client';

export const getALlUsers = gql`
  query {
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
  query {
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
  query userById($id: String) {
    user(id: $id) {
      id
      name
      firstname
      email
    }
  }
`;

export const updateUserStatus = gql`
  mutation UpdateUserStatus($userId: String!, $status: String!) {
    updateUserStatus(input: { userId: $userId, status: $status }) {
      errors
      user {
        id
        status
      }
    }
  }
`;
