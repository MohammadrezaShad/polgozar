/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetALlCategories
// ====================================================

export interface GetALlCategories_categories_groups {
  __typename: "Group";
  id: string;
  name: string;
}

export interface GetALlCategories_categories {
  __typename: "Category";
  id: string;
  title: string;
  slug: string;
  description: string;
  coverPhotoUrl: string | null;
  groups: GetALlCategories_categories_groups[];
}

export interface GetALlCategories {
  categories: GetALlCategories_categories[];
}
