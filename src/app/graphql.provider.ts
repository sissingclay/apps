import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApplicationConfig, inject } from '@angular/core';
import {
  ApolloClientOptions,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';

const uri = 'https://graphql.contentful.com/content/v1/spaces/wk16unitqhia';
export function apolloOptionsFactory(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);
  // Set authentication header
  const auth = setContext((operation, context) => {
    return {
      headers: {
        Authorization: `Bearer R1IO4UXYeyfeMO1zR9Qe0eVr7579RJs283a2-7Ygu40`,
      },
    };
  });

  return {
    link: ApolloLink.from([auth, httpLink.create({ uri })]),
    cache: new InMemoryCache(),
  };
}

export const graphqlProvider: ApplicationConfig['providers'] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
  },
];
