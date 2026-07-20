import * as React from 'react';
import { raf } from '@rc-component/util';

type Updater<ValueType> = (prev?: ValueType) => ValueType;

export default function useFrameState<ValueType>(
  defaultValue: ValueType,
): [ValueType, (updater: Updater<ValueType>) => void] {
    throw new Error("STUB");
}
