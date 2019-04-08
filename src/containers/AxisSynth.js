// @flow

import * as React from 'react';

// Components
import Cube from '../modules/Cube';

// Types
import type { Screen } from '../types';

type Props = {
  screen: Screen,
};

export default ({ screen }: Props): React.Node => (
  <Cube {...{ screen }} />
);
