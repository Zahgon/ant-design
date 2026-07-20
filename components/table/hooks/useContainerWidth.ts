import type { TableProps } from '@rc-component/table';

export default function useContainerWidth(prefixCls: string) {
  const getContainerWidth: TableProps['getContainerWidth'] = (ele, width) => {
      throw new Error("STUB");
  };

  return getContainerWidth;
}
