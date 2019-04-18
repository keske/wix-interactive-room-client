// @flow

import * as React from 'react';

// Types
import type { MouseOrTouchPosition } from '../types';

type Props = {
  mouse: MouseOrTouchPosition,
  size?: number,
};

export default ({
  mouse,
  size = 500,
}: Props): React.Node => (
  <div>
    <style>
      {`
        .root {
          position: 'absolute';
          zIndex: 1;
          padding: 300px;
        }
        .wrap {
          perspective: ${(mouse.x / 2)}px;
          perspective-origin: ${(mouse.y / 20)}% ${size / 2}px;
          transform: scale(${mouse.x / 800});
        }
        .cube {
          position: relative;
          width: ${size}px;
          transform-style: preserve-3d;
        }
        .cube div {
          position: absolute;
          width: ${size}px;
          height: ${size}px;
        }
        .back {
          transform: translateZ(-${size / 2}px) rotateY(180deg);
        }
        .back .invert {
          transform: scaleX(-1);
        }
        .right {
          transform: rotateY(-270deg) translateX(${size / 2}px);
          transform-origin: top right;
        }
        .right .invert {
          transform: scaleX(-1);
        }
        .left {
          transform: rotateY(270deg) translateX(-${size / 2}px);
          transform-origin: center left;
        }
        .left .invert {
          transform: scaleX(-1);
        }
        .top {
          transform: rotateX(-90deg) translateY(-${size / 2}px);
          transform-origin: top center;
        }
        .top .invert {
          transform: scaleY(1);
        }
        .bottom {
          transform: rotateX(90deg) translateY(${size / 2}px);
          transform-origin: bottom center;
        }
        .front {
          transform: translateZ(${size / 2}px);
        }
      `}
    </style>
    <div class="root">
      <div class="wrap">
        <div class="cube">
          {
            // <div class="front">front</div>
          }
          <div class="back">
            <div class="invert">
              <img
                height={`${size}px`}
                src="https://payload.cargocollective.com/1/1/45123/13845407/CENTER.png?fbclid=IwAR16uMoFITBAdiMNAgeZNciPLOwHrmYtEItuH8zMZu529abqwUKsvl00zDk"
                width={`${size}px`}
              />
            </div>
          </div>
          <div class="top">
            <div class="invert">
              <img
                height={`${size}px`}
                src="https://payload.cargocollective.com/1/1/45123/13845407/TOP.png?fbclid=IwAR1kyagtWa4bUOIVuAfZlFbAHa5FA8TS_RyHsX03NuOLyLm0zNN77BhKntw"
                width={`${size}px`}
              />
            </div>
          </div>
          <div class="bottom">
            <div class="invert">
              <img
                height={`${size}px`}
                src="https://payload.cargocollective.com/1/1/45123/13845407/BOTTOM.png?fbclid=IwAR0VnhGzCDYeSA5Vqfh6lrpPhqGD38j80gOKtBTMf0iXAibYTwh19244XZ4"
                width={`${size}px`}
              />
            </div>
          </div>
          <div class="left">
            <div class="invert">
              <img
                height={`${size}px`}
                src="https://payload.cargocollective.com/1/1/45123/13845407/LEFT.png?fbclid=IwAR1q4HSr7uqJ9Fn6H1Njw-8k2cC4lkc6qVZFLTpuDtzR8HBF88g36M9shaw"
                width={`${size}px`}
              />
            </div>
          </div>
          <div class="right">
            <div class="invert">
              <img
                height={`${size}px`}
                src="https://payload.cargocollective.com/1/1/45123/13845407/RIGHT.png?fbclid=IwAR1WNkKyQFg0tD1y6YM-P2P8lLniCyDDy6Mbwuxf1asmvNewcds4yM_doso"
                width={`${size}px`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
