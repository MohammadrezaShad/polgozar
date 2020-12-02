import { gql } from '@apollo/client';
import { basicAddress, basicEventDetails, basicGroupDetails } from './commonFragments';
import { basicProfile } from './users';
import { basicCategoryInfo } from './categories';

// Fragments
export const groupCardInfo = gql`
  fragment groupCardInfo on Group {
    ...basicGroupDetails
    coverPhotoUrl
    status
    members {
      ...basicProfile
    }
    address {
      ...basicAddress
    }
    categories {
      ...basicCategoryInfo
    }
  }
  ${basicAddress}
  ${basicProfile}
  ${basicCategoryInfo}
  ${basicGroupDetails}
`;

// Queries
export const getAllGroups = gql`
  query GetAllGroups {
    groups {
      ...groupCardInfo
    }
  }
  ${groupCardInfo}
`;

export const getGroupById = gql`
  query GroupByIdSlug($id: ID, $slug: String) {
    group(slug: $slug, id: $id) {
      ...groupCardInfo
      description
      organizers {
        ...basicProfile
      }
      events {
        ...basicEventDetails
      }
      categories {
        ...basicCategoryInfo
      }
    }
  }
  ${basicEventDetails}
  ${basicProfile}
  ${basicCategoryInfo}
  ${groupCardInfo}
`;

export const updateGroupStatus = gql`
  mutation UpdateGroupStatus($input: UpdateGroupStatusInput!) {
    updateGroupStatus(input: $input) {
      errors
      group {
        id
        status
      }
    }
  }
`;
