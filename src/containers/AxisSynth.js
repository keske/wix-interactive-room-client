// @flow

import * as React from 'react';

// Components
import Cube from '../modules/Cube';

// Types
import type { Acceleration, Mouse, Screen } from '../types';

type Props = {
  acceleration: Acceleration,
  mouse: Mouse,
  screen: Screen,
};

export default (props: Props): React.Node => (
  <Cube {...props} />
);
