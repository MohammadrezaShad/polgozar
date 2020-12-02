import { gql } from '@apollo/client';

// Fragments
export const basicCategoryInfo = gql`
  fragment basicCategoryInfo on Category {
    title
    description
  }
`;

// Queries
export const getAllCategories = gql`
  query GetAllCategories {
    categories {
      id
      slug
      coverPhotoUrl
      ...basicCategoryInfo
    }
  }
  ${basicCategoryInfo}
`;
