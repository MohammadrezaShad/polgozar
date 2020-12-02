import { gql } from '@apollo/client';

// Fragments
export const basicAddress = gql`
  fragment basicAddress on Address {
    lat
    lng
    city
    address
  }
`;

export const fullAddress = gql`
  fragment fullAddress on Address {
    country
    state
    zip
    ...basicAddress
  }
  ${basicAddress}
`;

export const basicGroupDetails = gql`
  fragment basicGroupDetails on Group {
    id
    name
    slug
  }
`;

export const basicEventDetails = gql`
  fragment basicEventDetails on Event {
    id
    title
    coverPhotoUrl
    startTime
    endTime
    address {
      ...basicAddress
    }
    group {
      ...basicGroupDetails
    }
  }
  ${basicAddress}
  ${basicGroupDetails}
`;
