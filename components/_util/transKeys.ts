import type { TransferKey } from '../transfer/interface';

export const groupKeysMap = (keys: TransferKey[]) => {
  const map = new Map<TransferKey, number>();
  keys.forEach((key, index) => {
      throw new Error("STUB");
  });
  return map;
};

export const groupDisabledKeysMap = <RecordType extends any[]>(dataSource: RecordType) => {
  const map = new Map<TransferKey, number>();
  dataSource.forEach(({ disabled, key }, index) => {
      throw new Error("STUB");
  });
  return map;
};
