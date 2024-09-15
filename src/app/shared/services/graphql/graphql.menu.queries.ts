import { gql } from 'apollo-angular';

const GET_MENU = gql`
  query Query {
    menuCollection {
      items {
        url
        title
      }
    }
  }
`;

export { GET_MENU };
