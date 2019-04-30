// @flow

import * as React from 'react';

// Components
import Audio from './Audio';
import Background from './Background';
import Graphics from './Graphics';

// Types
import type { Acceleration, MouseOrTouchPosition, Screen } from '../../types';

type Props = {
  acceleration: Acceleration,
  mouse: MouseOrTouchPosition,
  screen: Screen,
};

type State = {
  endPoint: string,
  id: number | null,
};

// TODO:
// 1. Refactor developmetn and production ip's to functions()
export default class LensSynth extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      id: null,
      endPoint: process.env.REACT_APP_STAGE === 'production'
        ? 'http://134.209.218.211:3070'
        : 'http://localhost:3070',
    };
  }

  componentDidMount = () => {
    this.registerDevice();
  }

  registerDevice = () => {
    const id = +(new Date());

    this.setState({ id });
  }

  render = () => {
    const { endPoint, id } = this.state;
    const { acceleration, mouse } = this.props;

    const props = ({
      acceleration,
      endPoint,
      mouse,
      id,
    });

    return (
      id && (
        <Audio {...props }>
          <Background />
          <Graphics {...props } />
        </Audio>
      )
    );
  }

}
