// @flow

import * as React from 'react';
import * as R from 'ramda';

import ReactDOM from 'react-dom';

// import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom';

// Utils
import * as serviceWorker from './utils/serviceWorker';

// Containers
import Page from './containers/Page';

R.pipe(
  () => (
    document.getElementById('root')
  ),
  (root) => {
    ReactDOM.render((
      <BrowserRouter>
        <React.Fragment>
          <Route
            component={Page}
            exact
            path="/"
          />
        </React.Fragment>
      </BrowserRouter>
    ), root);

    serviceWorker.unregister();
  },
)();
