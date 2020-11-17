import { gql } from '@apollo/client';

export const getALlCategories = gql`
  query {
    categories {
      id
      title
      slug
      description
      coverPhotoUrl
      groups {
        id
        name
      }
    }
  }
`;

export const getCategoryById = gql`
  query {
    category(slug: "non-odit-ut") {
      id
      title
      slug
    }
  }
`;
