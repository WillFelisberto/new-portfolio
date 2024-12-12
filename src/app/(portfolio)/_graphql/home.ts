import { gql } from '@apollo/client';

export const HOME = gql`
  query Home {
    Abouts {
      docs {
        name
        description
        technologies {
          name
          id
        }
        social {
          icon
          url
          name
        }
        image {
          url
          alt
          filename
        }
      }
    }
    Technologies {
      docs {
        id
        name
        icon
      }
    }
    Educations {
      docs {
        title
        description
        educationLogo {
          alt
          filename
          url
        }
        url
        startDate
        endDate
        courseName
        id
      }
    }
    Projects(limit: 2) {
      docs {
        id
        title
        slug
        shortDescription
        thumbnail {
          alt
          url
        }
        technologies {
          name
          icon
        }
        pageThumbnail {
          alt
          url
        }
      }
    }
  }
`;
