/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCategoryById
// ====================================================

export interface GetCategoryById_category {
  __typename: "Category";
  id: string;
  title: string;
  slug: string;
}

export interface GetCategoryById {
  category: GetCategoryById_category | null;
}
