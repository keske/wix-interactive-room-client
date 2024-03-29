// @flow

import * as React from 'react';

// Components
import Audio from './Audio';
import Background from './Background';
import Graphics from './Graphics';

// Types
import type { MouseOrTouchPosition, Screen } from '../../types';

type Props = {
  mouse: MouseOrTouchPosition,
  screen: Screen,
};

type State = {
  endPoint: string,
  id: number | null,
};

// TODO:
// 1. Refactor developmetn and production ip's to functions()
export default class GeometrySynth extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      id: null,
      endPoint: process.env.REACT_APP_STAGE === 'production'
        ? 'http://134.209.218.211:3070'
        : 'http://192.168.1.6:3070',
        // : 'http://localhost:3070',
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
    const { mouse } = this.props;

    const props = ({
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
