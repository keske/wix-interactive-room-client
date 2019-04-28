// @flow

import * as React from 'react';

type Props = {
  children: any,
};

type State = {
  handle: Function,
  show: boolean,
};

export const AboutContext = (
  React.createContext({
    handle: () => {},
    show: false,
  })
);

export default class About extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      // eslint-disable-next-line
      handle: this.handle,
      // eslint-disable-next-line
      show: false,
    };
  }

  handle = () => {
    const { show } = this.state;

    this.setState({
      show: !show,
    });
  }

  render(): React.Node {
    const { children } = this.props;

    return (
      <AboutContext.Provider value={this.state}>
        {
          children
        }
      </AboutContext.Provider>
    );
  }

}
