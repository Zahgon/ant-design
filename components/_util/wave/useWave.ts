import * as React from 'react';
import { raf, useEvent } from '@rc-component/util';

import type { WaveProps } from '.';
import { ConfigContext } from '../../config-provider';
import useToken from '../../theme/useToken';
import { TARGET_CLS } from './interface';
import type { ShowWave, WaveComponent } from './interface';
import showWaveEffect from './WaveEffect';

const useWave = (
  nodeRef: React.RefObject<HTMLElement | null>,
  className: string,
  component?: WaveComponent,
  colorSource?: WaveProps['colorSource'],
) => {
  const { wave } = React.useContext(ConfigContext);
  const [, token, hashId] = useToken();

  const showWave = useEvent<ShowWave>((event) => {
      throw new Error("STUB");
  });

  const rafIdRef = React.useRef<number>(null);

  // Clean up RAF on unmount to prevent memory leaks and stale callbacks
  React.useEffect(
    () => { throw new Error("STUB"); },
    [],
  );

  // Merge trigger event into one for each frame
  const showDebounceWave: ShowWave = (event) => {
      throw new Error("STUB");
  };

  return showDebounceWave;
};

export default useWave;
