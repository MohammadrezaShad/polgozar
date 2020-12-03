import { gql } from '@apollo/client';
import { fullAddress } from './commonFragments';

// Fragments
export const basicProfile = gql`
  fragment basicProfile on User {
    id
    firstname
    lastname
    avatarUrl
  }
`;

export const fullProfile = gql`
  fragment fullProfile on User {
    ...basicProfile
    role
    status
    description
    birthdate
  }
  ${basicProfile}
`;

export const myProfileDetails = gql`
  fragment myProfileDetails on User {
    phoneNumber
    email
    address {
      ...fullAddress
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
  ${fullProfile}
  ${fullAddress}
`;

// Queries
export const getAllUsers = gql`
  query GetAllUsers {
    users {
      ...fullProfile
    }
  }
  ${fullProfile}
`;

export const getMyAccount = gql`
  query GetMyAccount {
    myAccount {
      ...myProfileDetails
    }
  }
  ${myProfileDetails}
`;

export const getUserById = gql`
  query GetUserById($id: ID!) {
    user(id: $id) {
      ...basicProfile
    }
  }
  ${basicProfile}
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

export const updateProfile = gql`
  mutation UpdateProfile($input: UpdateProfileInput!) {
    updateProfile(input: $input) {
      errors
      user {
        ...myProfileDetails
      }
    }
  }
  ${myProfileDetails}
`;
