// @flow

import * as React from 'react';

// Components
import About from '../modules/About';
import AboutScreen from './About';
import AboutButton from '../components/AboutButton';
import LensSynth from './LensSynth/LensSynth';
import Debbuger from '../components/Debbuger';
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
                      <About>
                        <AboutScreen />
                        <AboutButton />
                      </About>
                      <LensSynth {...{ acceleration, mouse, screen }} />
                      <Debbuger {...{ acceleration, mouse }} />
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
