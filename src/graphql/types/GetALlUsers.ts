/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetALlUsers
// ====================================================

export interface GetALlUsers_users {
  __typename: "User";
  id: string;
  lastname: string;
  firstname: string;
  email: string | null;
  role: string | null;
  avatarUrl: string | null;
  status: string;
}

export interface GetALlUsers {
  users: GetALlUsers_users[];
}
