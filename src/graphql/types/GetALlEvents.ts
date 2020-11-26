/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetALlEvents
// ====================================================

export interface GetALlEvents_events_photos {
  __typename: "Photo";
  id: string;
  url: string;
}

export interface GetALlEvents_events_address {
  __typename: "Address";
  address: string;
  lat: number;
  lng: number;
}

export interface GetALlEvents_events_group {
  __typename: "Group";
  id: string;
  name: string;
  description: string;
}

export interface GetALlEvents_events {
  __typename: "Event";
  id: string;
  title: string;
  description: string;
  coverPhotoUrl: string | null;
  startTime: string;
  endTime: string;
  photos: GetALlEvents_events_photos[] | null;
  address: GetALlEvents_events_address | null;
  group: GetALlEvents_events_group;
}

export interface GetALlEvents {
  events: GetALlEvents_events[];
}
