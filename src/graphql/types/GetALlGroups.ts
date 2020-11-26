/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllGroups
// ====================================================

export interface GetAllGroups_groups_organizers {
  __typename: "User";
  id: string;
  name: string;
  email: string | null;
}

export interface GetAllGroups_groups_members {
  __typename: "User";
  name: string;
}

export interface GetAllGroups_groups_events {
  __typename: "Event";
  id: string;
  title: string;
}

export interface GetAllGroups_groups_address {
  __typename: "Address";
  address: string;
  lat: number;
  lng: number;
}

export interface GetAllGroups_groups_categories {
  __typename: "Category";
  title: string;
}

export interface GetAllGroups_groups {
  __typename: "Group";
  id: string;
  name: string;
  slug: string;
  description: string;
  coverPhotoUrl: string | null;
  status: string;
  organizers: GetAllGroups_groups_organizers[] | null;
  members: GetAllGroups_groups_members[];
  events: GetAllGroups_groups_events[];
  address: GetAllGroups_groups_address | null;
  categories: GetAllGroups_groups_categories[];
}

export interface GetAllGroups {
  groups: GetAllGroups_groups[];
}
