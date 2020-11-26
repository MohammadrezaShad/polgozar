/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetEventById
// ====================================================

export interface GetEventById_event_photos {
  __typename: "Photo";
  id: string;
  url: string;
}

export interface GetEventById_event_address {
  __typename: "Address";
  address: string;
  lat: number;
  lng: number;
}

export interface GetEventById_event_group {
  __typename: "Group";
  id: string;
  name: string;
  description: string;
}

export interface GetEventById_event {
  __typename: "Event";
  id: string;
  title: string;
  description: string;
  coverPhotoUrl: string | null;
  startTime: string;
  endTime: string;
  photos: GetEventById_event_photos[] | null;
  address: GetEventById_event_address | null;
  group: GetEventById_event_group;
}

export interface GetEventById {
  event: GetEventById_event | null;
}
