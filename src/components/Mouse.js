// @flow

import * as React from 'react';

// Types
type Props = {
  children: any,
};

type State = {
  x: number,
  y: number,
};

export default class Mouse extends React.Component<Props, State> {

  state = {
    x: 0,
    y: 0,
  };

  handleMouseMove = (event: { screenX: number, screenY: number }) => {
    this.setState({
      x: event.screenX,
      y: event.screenY,
    });
  };

  render = () => (
    <div
      onMouseMove={(event) => {
        this.handleMouseMove(event);
      }}
    >
      {
        this.props.children(this.state)
      }
    </div>
  )

}
