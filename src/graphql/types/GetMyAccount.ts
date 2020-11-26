/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMyAccount
// ====================================================

export interface GetMyAccount_myAccount_address {
  __typename: "Address";
  address: string;
  lat: number;
  lng: number;
}

export interface GetMyAccount_myAccount_groups {
  __typename: "Group";
  id: string;
  name: string;
}

export interface GetMyAccount_myAccount_ledGroups {
  __typename: "Group";
  id: string;
  name: string;
}

export interface GetMyAccount_myAccount_categories {
  __typename: "Category";
  id: string;
  title: string;
}

export interface GetMyAccount_myAccount {
  __typename: "User";
  id: string;
  lastname: string;
  firstname: string;
  email: string | null;
  role: string | null;
  avatarUrl: string | null;
  address: GetMyAccount_myAccount_address | null;
  groups: GetMyAccount_myAccount_groups[] | null;
  ledGroups: GetMyAccount_myAccount_ledGroups[] | null;
  categories: GetMyAccount_myAccount_categories[] | null;
}

export interface GetMyAccount {
  myAccount: GetMyAccount_myAccount | null;
}
