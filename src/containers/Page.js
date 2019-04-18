// @flow

import * as React from 'react';

// Components
import AxisSynth from './AxisSynth';
import Debbuger from '../components/Debbuger';
import HTMLScene from './HTMLScene';
import Gyroscope from '../modules/Gyroscope';
import ScreenInteraction from '../modules/ScreenInteraction';
import Screen from '../components/Screen';

export default (): React.Node => (
  <ScreenInteraction>
    {
      (mouse) => (
        <Gyroscope>
          {
            ({ acceleration }) => (
              <Screen>
                {
                  (screen) => (
                    <div>
                      <HTMLScene {...{ mouse }} />
                      <Debbuger {...{ acceleration, mouse }} />
                      <AxisSynth {...{ acceleration, mouse, screen }} />
                    </div>
                  )
                }
              </Screen>
            )
          }
        </Gyroscope>
      )
    }
  </ScreenInteraction>
);
