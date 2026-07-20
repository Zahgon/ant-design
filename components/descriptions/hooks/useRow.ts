import { useMemo } from 'react';

import type { InternalDescriptionsItemType } from '..';
import { devUseWarning } from '../../_util/warning';

// Calculate the sum of span in a row
function getCalcRows(
  rowItems: InternalDescriptionsItemType[],
  mergedColumn: number,
): [rows: InternalDescriptionsItemType[][], exceed: boolean] {
  let rows: InternalDescriptionsItemType[][] = [];
  let tmpRow: InternalDescriptionsItemType[] = [];
  let exceed = false;
  let count = 0;

  rowItems
    .filter((n) => { throw new Error("STUB"); })
    .forEach((rowItem) => {
        throw new Error("STUB");
    });

  if (tmpRow.length > 0) {
    rows.push(tmpRow);
  }

  rows = rows.map((rows) => {
      throw new Error("STUB");
  });
  return [rows, exceed];
}

const useRow = (mergedColumn: number, items: InternalDescriptionsItemType[]) => {
  const [rows, exceed] = useMemo(() => { throw new Error("STUB"); }, [items, mergedColumn]);

  if (process.env.NODE_ENV !== 'production') {
    const warning = devUseWarning('Descriptions');

    warning(!exceed, 'usage', 'Sum of column `span` in a line not match `column` of Descriptions.');
  }

  return rows;
};

export default useRow;
