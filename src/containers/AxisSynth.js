// @flow

import * as React from 'react';

// Components
import Gyroscope from '../components/Gyroscope';
import Mouse from '../components/Mouse';
import Screen from '../components/Screen';
import Three from '../components/Three';

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
                      <Three {...{ screen }} />
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
