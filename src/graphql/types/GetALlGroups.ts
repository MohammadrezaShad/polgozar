/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetALlGroups
// ====================================================

export interface GetALlGroups_groups_organizers {
  __typename: "User";
  id: string;
  name: string;
  email: string | null;
}

export interface GetALlGroups_groups_members {
  __typename: "User";
  name: string;
}

export interface GetALlGroups_groups_events {
  __typename: "Event";
  id: string;
  title: string;
}

export interface GetALlGroups_groups_address {
  __typename: "Address";
  address: string;
  lat: number;
  lng: number;
}

export interface GetALlGroups_groups_categories {
  __typename: "Category";
  title: string;
}

export interface GetALlGroups_groups {
  __typename: "Group";
  id: string;
  name: string;
  slug: string;
  description: string;
  coverPhotoUrl: string | null;
  status: string;
  organizers: GetALlGroups_groups_organizers[] | null;
  members: GetALlGroups_groups_members[];
  events: GetALlGroups_groups_events[];
  address: GetALlGroups_groups_address | null;
  categories: GetALlGroups_groups_categories[];
}

export interface GetALlGroups {
  groups: GetALlGroups_groups[];
}
