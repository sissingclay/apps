import { gql } from 'apollo-angular';

const GET_YEAR_GROUPS = gql`
  query Items($order: [YearGroupOrder]) {
    yearGroupCollection(order: $order) {
      items {
        year
        name
        _id
        teamsCollection(limit: 1) {
          items {
            slug
            name
          }
          limit
        }
      }
    }
  }
`;

const GET_YEAR_TEAMS = gql`
  query TeamCollection($where: TeamFilter, $order: [TeamOrder]) {
    teamCollection(where: $where, order: $order) {
      items {
        slug
        name
      }
    }
  }
`;

const GET_TEAM = gql`
  query TeamCollection($where: TeamFilter, $limit: Int) {
    teamCollection(where: $where, limit: $limit) {
      items {
        slug
        name
        description {
          json
        }
        image {
          url
          title
          description
        }
        officialsCollection {
          items {
            phoneNumber
            name
            image {
              url
              title
              description
            }
            type
            emailAddress
          }
        }
        sponsorCollection {
          items {
            name
            logo {
              url
              title
              description
            }
            domain
          }
        }
      }
    }
  }
`;

const GET_PAGE = gql`
  query PageCollection($where: PageFilter, $limit: Int) {
    pageCollection(where: $where, limit: $limit) {
      items {
        title
        slug
        officialCollection {
          items {
            phoneNumber
            type
            name
            emailAddress
            image {
              url
              title
              description
            }
          }
        }
      }
    }
  }
`;

export { GET_YEAR_GROUPS, GET_YEAR_TEAMS, GET_TEAM, GET_PAGE };
