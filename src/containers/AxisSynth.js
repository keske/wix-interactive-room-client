// @flow

import * as React from 'react';

// Components
import Cube from '../modules/Cube';
import Debbuger from '../components/Debbuger';
import Gyroscope from '../modules/Gyroscope';
import Mouse from '../modules/Mouse';
import Screen from '../components/Screen';

export default (): React.Node => (
  <Mouse>
    {
      (mouse) => (
        <Gyroscope>
          {
            ({ acceleration }) => (
              <Screen>
                {
                  (screen) => (
                    <div>
                      <Debbuger {...{ acceleration, mouse }} />
                      <Cube {...{ screen }} />
                    </div>
                  )
                }
              </Screen>
            )
          }
        </Gyroscope>
      )
    }
  </Mouse>
);
