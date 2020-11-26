/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateUserStatusInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateUserStatus
// ====================================================

export interface UpdateUserStatus_updateUserStatus_user {
  __typename: "User";
  id: string;
  status: string;
}

export interface UpdateUserStatus_updateUserStatus {
  __typename: "UpdateUserStatusPayload";
  errors: string[] | null;
  user: UpdateUserStatus_updateUserStatus_user | null;
}

export interface UpdateUserStatus {
  updateUserStatus: UpdateUserStatus_updateUserStatus | null;
}

export interface UpdateUserStatusVariables {
  input: UpdateUserStatusInput;
}
