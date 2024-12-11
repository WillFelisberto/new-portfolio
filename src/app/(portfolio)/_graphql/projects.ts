import { gql } from '@apollo/client';

export const PROJECTS = gql`
  query Projects {
    Projects(limit: 300) {
      docs {
        slug
      }
    }
  }
`;

export const PROJECT = gql`
  query Project($slug: String) {
    Projects(where: { slug: { equals: $slug } }, limit: 1) {
      docs {
        id
        title
        slug
        shortDescription
        description
        liveProjectUrl
        githubUrl
        updatedAt
        sections {
          title
          description
          image {
            alt
            url
          }
          id
        }
        createdAt
        technologies {
          name
          id
        }
      }
    }
  }
`;
