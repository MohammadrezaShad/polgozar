/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateGroupStatusInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateGroupStatus
// ====================================================

export interface UpdateGroupStatus_updateGroupStatus_group {
  __typename: "Group";
  id: string;
  status: string;
}

export interface UpdateGroupStatus_updateGroupStatus {
  __typename: "UpdateGroupStatusPayload";
  errors: string[] | null;
  group: UpdateGroupStatus_updateGroupStatus_group | null;
}

export interface UpdateGroupStatus {
  updateGroupStatus: UpdateGroupStatus_updateGroupStatus | null;
}

export interface UpdateGroupStatusVariables {
  input: UpdateGroupStatusInput;
}
