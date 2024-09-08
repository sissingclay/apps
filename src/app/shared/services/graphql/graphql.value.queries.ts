import { gql } from 'apollo-angular';

const GET_VALUE = gql`
  query ValueCollection {
    valueCollection {
      items {
        image {
          url
          title
          description
        }
        details
      }
    }
  }
`;

export { GET_VALUE };
