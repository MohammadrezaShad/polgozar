import { gql } from '@apollo/client';

export const getAllEvents = gql`
  query GetAllEvents {
    events {
      id
      title
      description
      coverPhotoUrl
      startTime
      endTime
      photos {
        id
        url
      }
      address {
        address
        lat
        lng
      }
      group {
        id
        name
        description
      }
    }
  }
`;

export const getEventById = gql`
  query GetEventById($id: ID) {
    event(id: $id) {
      id
      title
      description
      coverPhotoUrl
      startTime
      endTime
      photos {
        id
        url
      }
      address {
        address
        lat
        lng
      }
      group {
        id
        name
        description
      }
    }
  }
`;