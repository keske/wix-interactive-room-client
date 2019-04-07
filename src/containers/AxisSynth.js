// @flow

import * as React from 'react';

// Components
import Gyroscope from '../components/Gyroscope';

export default (): React.Node => (
  <Gyroscope>
    {
      ({ acceleration }) => (
        <div>
          {
            JSON.stringify(acceleration)
          }
        </div>
      )
    }
  </Gyroscope>
);
