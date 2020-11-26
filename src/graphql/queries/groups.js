import { gql } from '@apollo/client';

export const getALlGroups = gql`
  query GetALlGroups {
    groups {
      id
      name
      slug
      description
      coverPhotoUrl
      status
      organizers {
        id
        name
        email
      }
      members {
        name
      }
      events {
        id
        title
      }
      address {
        address
        lat
        lng
      }
      categories {
        title
      }
    }
  }
`;

export const getGroupById = gql`
  query GroupByIdSlug($id: String, $slug: String) {
    group(slug: $slug, id: $id) {
      id
      name
    }
  }
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
