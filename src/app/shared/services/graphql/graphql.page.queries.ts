import { gql } from 'apollo-angular';

const GET_PAGE = gql`
  query PageCollection($where: PageFilter, $limit: Int) {
    pageCollection(where: $where, limit: $limit) {
      items {
        title
        slug
        content {
          json
        }
      }
    }
  }
`;

export { GET_PAGE };
