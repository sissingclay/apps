import { gql } from 'apollo-angular';

const GET_OFFICIALS = gql`
  query Query($order: [OfficialsOrder], $where: OfficialsFilter) {
    officialsCollection(order: $order, where: $where) {
      items {
        commiteeType
        commiteeMember
        emailAddress
        image {
          title
          url
        }
        impact
        name
        order
        phoneNumber
        responsibilities
        type
      }
    }
  }
`;

export { GET_OFFICIALS };
