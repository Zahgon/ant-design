import * as React from 'react';

const AUTO_INTERVAL = 200;
const STEP_BUCKETS: [limit: number, stepPtg: number][] = [
  [30, 0.05],
  [70, 0.03],
  [96, 0.01],
];

export default function usePercent(
  spinning: boolean,
  percent?: number | 'auto',
): number | undefined {
  const [mockPercent, setMockPercent] = React.useState(0);
  const mockIntervalRef = React.useRef<ReturnType<typeof setInterval>>(null);

  const isAuto = percent === 'auto';

  React.useEffect(() => {
      throw new Error("STUB");
  }, [isAuto, spinning]);

  return isAuto ? mockPercent : percent;
}
