import { gql } from '@apollo/client';

export const getAllCategories = gql`
  query GetAllCategories {
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
  query GetCategoryById {
    category(slug: "non-odit-ut") {
      id
      title
      slug
    }
  }
`;
