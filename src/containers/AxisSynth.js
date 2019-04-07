// @flow

import * as React from 'react';

// Components
import Gyroscope from '../components/Gyroscope';
import Mouse from '../components/Mouse';
import Screen from '../components/Screen';

export default (): React.Node => (
  <Mouse>
    {
      (mouse) => (
        <Gyroscope>
          {
            ({ acceleration }) => (
              <Screen>
                <div>
                  {
                    `Mouse: ${JSON.stringify(mouse)}`
                  }
                  {
                    `Acceleration: ${JSON.stringify(acceleration)}`
                  }
                </div>
              </Screen>
            )
          }
        </Gyroscope>
      )
    }
  </Mouse>
);
