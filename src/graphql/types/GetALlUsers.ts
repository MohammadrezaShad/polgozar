/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllUsers
// ====================================================

export interface GetAllUsers_users {
  __typename: "User";
  id: string;
  lastname: string;
  firstname: string;
  email: string | null;
  role: string | null;
  avatarUrl: string | null;
  status: string;
}

export interface GetAllUsers {
  users: GetAllUsers_users[];
}
