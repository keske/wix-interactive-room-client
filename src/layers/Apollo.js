// @flow

import { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloLink, concat, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';

import * as R from 'ramda';

type Props = {
  children: any,
};

type State = {
  client: any,
};

const ip = {
  localhost: '127.0.0.1',
  production: '138.197.13.147',
};

export default class ApolloLayer extends Component<Props, State> {

  state = {
    client: null,
  };

  componentDidMount = async () => {
    this.set();
  };

  set = async () => (
    R.pipe(
      ({ env }) => ({
        httpLink: new HttpLink({
          uri: `http://${ip[env]}:3030/graphql`,
        }),
        wsLink: new WebSocketLink({
          uri: `ws://${ip[env]}:3030/subscriptions`,
          options: {
            reconnect: true,
          },
        }),
      }),
      ({
        httpLink,
        wsLink,
      }) => ({
        link: split(
          ({ query }) => {
            const { kind, operation } = getMainDefinition(query);

            return kind === 'OperationDefinition'
                && operation === 'subscription';
          },
          wsLink,
          httpLink,
        ),
      }),
      async ({ link }) => {
        const client = new ApolloClient({
          link: concat(link),
          cache: new InMemoryCache(),
        });

        this.setState({ client });
      },
    )({
      env: process.env.REACT_APP_STAGE,
    })
  )

  render() {
    const { client } = this.state;
    const { children } = this.props;

    return (
      R.not(R.isNil(client)) && (
        children({
          client,
        })
      )
    );
  }
}
