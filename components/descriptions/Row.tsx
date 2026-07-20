import * as React from 'react';

import type { InternalDescriptionsItemType } from '.';
import Cell from './Cell';
import type { DescriptionsContextProps } from './DescriptionsContext';
import DescriptionsContext from './DescriptionsContext';

interface CellConfig {
  component: string | [string, string];
  type: 'label' | 'content' | 'item';
  showLabel?: boolean;
  showContent?: boolean;
}

function renderCells(
  items: InternalDescriptionsItemType[],
  { colon, prefixCls, bordered }: RowProps,
  {
    component,
    type,
    showLabel,
    showContent,
    labelStyle: rootLabelStyle,
    contentStyle: rootContentStyle,
    styles: rootStyles,
  }: CellConfig & DescriptionsContextProps,
) {
  return items.map(
    (
      {
        label,
        children,
        prefixCls: itemPrefixCls = prefixCls,
        className,
        style,
        labelStyle,
        contentStyle,
        span = 1,
        key,
        styles,
        classNames,
      },
      index,
    ) => {
          throw new Error("STUB");
      },
  );
}

export interface RowProps {
  prefixCls: string;
  vertical: boolean;
  row: InternalDescriptionsItemType[];
  bordered?: boolean;
  colon: boolean;
  index: number;
  children?: React.ReactNode;
}

const Row: React.FC<RowProps> = (props) => {
  const descContext = React.useContext(DescriptionsContext);

  const { prefixCls, vertical, row, index, bordered } = props;
  if (vertical) {
    return (
      <>
        <tr key={`label-${index}`} className={`${prefixCls}-row`}>
          {renderCells(row, props, {
            component: 'th',
            type: 'label',
            showLabel: true,
            ...descContext,
          })}
        </tr>
        <tr key={`content-${index}`} className={`${prefixCls}-row`}>
          {renderCells(row, props, {
            component: 'td',
            type: 'content',
            showContent: true,
            ...descContext,
          })}
        </tr>
      </>
    );
  }

  return (
    <tr key={index} className={`${prefixCls}-row`}>
      {renderCells(row, props, {
        component: bordered ? ['th', 'td'] : 'td',
        type: 'item',
        showLabel: true,
        showContent: true,
        ...descContext,
      })}
    </tr>
  );
};

export default Row;
