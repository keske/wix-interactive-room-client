// @flow

import * as R from 'ramda';
import * as React from 'react';

type Props = {
  size?: number,
};

export default ({
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

          border: 1px solid #FFF;
        }
        .back {
          transform: translateZ(-${size / 2}px) rotateY(180deg);
        }
        .right {
          transform: rotateY(-270deg) translateX(${size / 2}px);
          transform-origin: top right;
        }
        .left {
          transform: rotateY(270deg) translateX(-${size / 2}px);
          transform-origin: center left;
        }
        .top {
          transform: rotateX(-90deg) translateY(-${size / 2}px);
          transform-origin: top center;
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
          <div class="back">back</div>
          <div class="top">top</div>
          <div class="bottom">bottom</div>
          <div class="left">left</div>
          <div class="right">right</div>
        </div>
      </div>
    </div>
  </div>
);
