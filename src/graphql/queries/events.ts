import { gql } from '@apollo/client';
import { basicEventDetails } from './commonFragments';

// Queries
export const getAllEvents = gql`
  query GetAllEvents {
    events {
      ...basicEventDetails
    }
  }
  ${basicEventDetails}
`;

export const getEventById = gql`
  query GetEventById($id: ID) {
    event(id: $id) {
      ...basicEventDetails
      description
      photos {
        id
        url
      }
    }
  }
  ${basicEventDetails}
`;

// mutations
export const createEvent = gql`
  mutation CreateEvent($input: CreateEventInput!) {
    createEvent(input: $input) {
      errors
      event {
        ...basicEventDetails
      }
    }
  }
  ${basicEventDetails}
`;
