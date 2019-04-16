// @flow

// Utils
import getRandom from './getRandom';

export default (): string => (
  `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`
);
