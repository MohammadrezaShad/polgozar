/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GroupByIdSlug
// ====================================================

export interface GroupByIdSlug_group {
  __typename: "Group";
  id: string;
  name: string;
}

export interface GroupByIdSlug {
  group: GroupByIdSlug_group | null;
}

export interface GroupByIdSlugVariables {
  id?: string | null;
  slug?: string | null;
}
