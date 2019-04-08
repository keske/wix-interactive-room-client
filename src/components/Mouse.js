// @flow

import * as React from 'react';

// Types
export type Mouse = {
  x: number,
  y: number,
};

type Props = {
  children: any,
};

type State = Mouse;

export default class MouseComponent extends React.Component<Props, State> {

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
