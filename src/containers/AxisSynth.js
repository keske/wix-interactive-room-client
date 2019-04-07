// @flow

import * as React from 'react';

// Components
import Mouse from '../components/Mouse';
import Gyroscope from '../components/Gyroscope';

export default (): React.Node => (
  <Mouse>
    {
      (mouse) => (
        <Gyroscope>
          {
            ({ acceleration }) => (
              <div>
                {
                  `Mouse: ${JSON.stringify(mouse)}`
                }
                {
                  `Acceleration: ${JSON.stringify(acceleration)}`
                }
              </div>
            )
          }
        </Gyroscope>
      )
    }
  </Mouse>
);
