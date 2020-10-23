import { gql } from "@apollo/client";

export const getALlGroups = gql`
  query {
    groups {
      id
      name
      slug
      description
      coverPhotoUrl
      organizer {
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
    }
  }
`;

export const getGroupById = gql`
  query groupByIdSlug($id: String, $slug: String) {
    group(slug: $slug, id: $id) {
      id
      name
    }
  }
`;
