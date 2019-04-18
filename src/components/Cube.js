// @flow

import * as R from 'ramda';
import * as React from 'react';

// Components
import Ticker from './Ticker';

type Props = {
  size?: number,
};

export default ({
  size = 400,
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
          perspective: 500px;
          perspective-origin: 50% ${size / 2}px;
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
          transform: scaleY(-1);
        }
        .top .invert {
          transform: scaleY(-1);
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
              <Ticker
                duration={3000}
                text={R.range(0, 10).map(() => 'DJ MASHA')}
              />
            </div>
          </div>
          <div class="top">
            <div class="invert">
              <Ticker
                duration={1000}
                text="ANDREY KESKE"
              />
            </div>
          </div>
          <div class="bottom">
            <div class="invert">
              <Ticker
                duration={10000}
                text="KISS MY ASS"
              />
            </div>
          </div>
          <div class="left">
            <div class="invert">
              <Ticker
                duration={5000}
                text="COMPUTER CRAPHICS"
              />
            </div>
          </div>
          <div class="right">
            <div class="invert">
              <Ticker
                duration={100000}
                text="ASS MY KISS"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
