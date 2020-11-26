/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllCategories
// ====================================================

export interface GetAllCategories_categories_groups {
  __typename: "Group";
  id: string;
  name: string;
}

export interface GetAllCategories_categories {
  __typename: "Category";
  id: string;
  title: string;
  slug: string;
  description: string;
  coverPhotoUrl: string | null;
  groups: GetAllCategories_categories_groups[];
}

export interface GetAllCategories {
  categories: GetAllCategories_categories[];
}
