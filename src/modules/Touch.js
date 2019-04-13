// @flow

import * as React from 'react';

// Types
import type { Mouse } from '../types';

type Props = {
  children: any,
};

type State = Mouse;

export default class TouchComponent extends React.Component<Props, State> {

  state = {
    x: 0,
    y: 0,
  };

  handleTouchMove = (event: any) => {
    this.setState({
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    });
  };

  render = () => (
    <div
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
