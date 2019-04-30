// @flow

import * as React from 'react';

// Components
import About from '../modules/About';
import AboutScreen from './About';
import AboutButton from '../components/AboutButton';
import GeometrySynth from './GeometrySynth/Root';
import Debbuger from '../components/Debbuger';
import ScreenInteraction from '../modules/ScreenInteraction';
import Screen from '../components/Screen';
import TextSynth from './TextSynth/Root';

export default (): React.Node => (
  <ScreenInteraction>
    {
      (mouse) => (
        <Screen>
          {
            (screen) => (
              <div>
                <About>
                  <AboutScreen />
                  <AboutButton />
                </About>
                {
                  <GeometrySynth {...{ mouse, screen }} />
                }
                {
                  // <TextSynth {...{ mouse, screen }} />
                }
                <Debbuger {...{ mouse }} />
              </div>
            )
          }
        </Screen>
      )
    }
  </ScreenInteraction>
);
