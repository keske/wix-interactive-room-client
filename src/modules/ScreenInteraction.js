// @flow

import * as React from 'react';

// Types
import type { MouseOrTouchPosition } from '../types';

type Props = {
  children: any,
};

type State = MouseOrTouchPosition;

export default class ScreenInteraction extends React.Component<Props, State> {

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

  handleTouchMove = (event: any) => {
    this.setState({
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    });
  };

  render = () => (
    <div
      onMouseMove={(event) => {
        this.handleMouseMove(event);
      }}
      onTouchMove={(event) => {
        this.handleTouchMove(event);
      }}
    >
      {
        this.props.children(this.state)
      }
    </div>
  )

}
