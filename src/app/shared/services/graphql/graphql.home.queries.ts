import { gql } from 'apollo-angular';

const GET_HOME_HERO = gql`
  query HomeCollection {
    homeCollection {
      items {
        heroImage {
          url
          title
          description
        }
        hero {
          json
        }
      }
    }
  }
`;

export { GET_HOME_HERO };
