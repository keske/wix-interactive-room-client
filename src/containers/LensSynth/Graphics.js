// @flow

import * as R from 'ramda';
import * as React from 'react';

// Libs
import axios from 'axios';

// Components
import Scene, {
  circle,
  cone,
  cube,
  dodecahedron,
  knot,
  octahedron,
  sphere,
  tetrahedron,
  torus,
} from '../../modules/Three';

// Utils
import getRandom from '../../utils/getRandom';

// Types
import type { Acceleration, MouseOrTouchPosition, Screen } from '../../types';

type Props = {
  acceleration: Acceleration,
  endPoint: string,
  geometries: Array<{
    fn: Function,
    type: string,
  }>,
  mouse: MouseOrTouchPosition,
  id: string,
  screen: Screen,
};

// TODO:
// 1. Refactor developmetn and production ip's to functions()
export default class Graphics extends React.Component<Props> {

  static defaultProps = {
    geometries: [{
      object: circle(),
      type: 'circle',
    }, {
      object: cone(),
      type: 'cone',
    }, {
      object: cube(),
      type: 'cube',
    }, {
      object: dodecahedron(),
      type: 'dodecahedron',
    }, {
      object: knot(),
      type: 'knot',
    }, {
      object: octahedron(),
      type: 'octahedron',
    }, {
      object: sphere(),
      type: 'sphere',
    }, {
      object: tetrahedron(),
      type: 'tetrahedron',
    }, {
      object: torus(),
      type: 'torus',
    }],
  }

  componentDidMount = () => {
    this.init();

    this.timer = setInterval(() => {
      this.updateDevice();
    }, 100);
  }

  composeObjects = (scene: boolean = true) => {
    const { geometries, mouse } = this.props;

    return (
      R.pipe(
        R.always({
          min: 0,
          max: R.dec(R.length(geometries)),
        }),
        ({ min, max }) => (
          getRandom(min, max)
        ),
        (number) => (
          geometries[number]
        ),
        ({ object, type }) => [{
          animate: {
            position: {
              x: mouse.x - (window.innerWidth / 2),
              y: -(mouse.y - (window.innerHeight / 2)),
              // z: (mouse.x - mouse.y) / getRandom(1, 10),
            },
            rotation: {
              x: mouse.y / getRandom(1, 10),
              y: mouse.x / getRandom(1, 10),
              z: mouse.x / getRandom(1, 10),
            },
          },
          object: scene && object,
          render: {
            type,
          },
        }],
      )()
    );
  }

  init = async () => {
    const { endPoint, id } = this.props;

    const objects = this.composeObjects(false);

    await axios.post(endPoint, {
      id,
      type: 'lenssynth',
      objects,
    });
  }

  updateDevice = async () => {
    const { endPoint, id } = this.props;

    const objects = this.composeObjects(false);

    await axios.patch(endPoint, {
      id,
      device: {
        objects,
      },
    });
  }

  animate = async () => {
    const { id } = this.props;

    await axios.post((
      process.env.REACT_APP_STAGE === 'production'
        ? 'http://134.209.218.211:3080/animate'
        : 'http://192.168.1.6:3080/animate'
        // : 'http://localhost:3080/animate'
    ), {
      id,
    });
  }

  timer: any

  render = () => (
    <div
      onClick={() => {
        this.animate();
      }}
      onTouchStart={() => {
        this.animate();
      }}
    >
      <Scene
        {...this.props}
        objects={this.composeObjects()}
      >
        {
          () => false
        }
      </Scene>
    </div>
  )

}
