import * as React from 'react';
import DoubleLeftOutlined from '@ant-design/icons/DoubleLeftOutlined';
import DoubleRightOutlined from '@ant-design/icons/DoubleRightOutlined';
import EllipsisOutlined from '@ant-design/icons/EllipsisOutlined';
import LeftOutlined from '@ant-design/icons/LeftOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';
import type {
  PaginationLocale,
  PaginationProps as RcPaginationProps,
} from '@rc-component/pagination';
import RcPagination from '@rc-component/pagination';
import enUS from '@rc-component/pagination/locale/en_US';
import { clsx } from 'clsx';

import { useMergeSemantic, useSemanticRootStyle } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import useSize from '../config-provider/hooks/useSize';
import type { SizeType } from '../config-provider/SizeContext';
import useVariant from '../form/hooks/useVariants';
import useBreakpoint from '../grid/hooks/useBreakpoint';
import { useLocale } from '../locale';
import type { SelectProps } from '../select';
import Select from '../select';
import { useToken } from '../theme/internal';
import useStyle from './style';
import BorderedStyle from './style/bordered';
import useShowSizeChanger from './useShowSizeChanger';

export type PaginationSemanticType = {
  classNames?: {
    root?: string;
    item?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    item?: React.CSSProperties;
  };
};

export type PaginationSemanticAllType = GenerateSemantic<PaginationSemanticType, PaginationProps>;

export interface PaginationProps
  extends Omit<RcPaginationProps, 'showSizeChanger' | 'pageSizeOptions' | 'classNames' | 'styles'> {
  showQuickJumper?: boolean | { goButton?: React.ReactNode };
  size?: SizeType;
  responsive?: boolean;
  role?: string;
  totalBoundaryShowSizeChanger?: number;
  rootClassName?: string;
  showSizeChanger?: boolean | SelectProps;
  /** @deprecated Not official support. Will be removed in next major version. */
  selectComponentClass?: any;
  /** `string` type will be removed in next major version. */
  pageSizeOptions?: (string | number)[];
  classNames?: PaginationSemanticAllType['classNamesAndFn'];
  styles?: PaginationSemanticAllType['stylesAndFn'];
}

export type PaginationPosition = 'top' | 'bottom' | 'both';

export interface PaginationConfig extends Omit<PaginationProps, 'rootClassName'> {
  position?: PaginationPosition;
}

export type { PaginationLocale };

const Pagination: React.FC<PaginationProps> = (props) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  Pagination.displayName = 'Pagination';
}

export default Pagination;
