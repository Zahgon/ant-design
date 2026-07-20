import { genVirtualTable } from '@rc-component/table';

import type { AnyObject } from '../../_util/type';
import type { InternalTableProps } from '../InternalTable';

/**
 * Same as `rc-component/table` but we modify trigger children update logic instead.
 */
const RcVirtualTable = genVirtualTable((prev, next) => {
    throw new Error("STUB");
});

export default RcVirtualTable;
