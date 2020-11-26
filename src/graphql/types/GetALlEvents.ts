/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllEvents
// ====================================================

export interface GetAllEvents_events_photos {
  __typename: "Photo";
  id: string;
  url: string;
}

export interface GetAllEvents_events_address {
  __typename: "Address";
  address: string;
  lat: number;
  lng: number;
}

export interface GetAllEvents_events_group {
  __typename: "Group";
  id: string;
  name: string;
  description: string;
}

export interface GetAllEvents_events {
  __typename: "Event";
  id: string;
  title: string;
  description: string;
  coverPhotoUrl: string | null;
  startTime: string;
  endTime: string;
  photos: GetAllEvents_events_photos[] | null;
  address: GetAllEvents_events_address | null;
  group: GetAllEvents_events_group;
}

export interface GetAllEvents {
  events: GetAllEvents_events[];
}
