import * as React from 'react';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import { composeRef, omit, pickAttrs } from '@rc-component/util';
import { clsx } from 'clsx';

import fallbackProp from '../_util/fallbackProp';
import { useMergeSemantic } from '../_util/hooks/useMergeSemantic';
import type { GenerateSemantic } from '../_util/hooks/useMergeSemantic/semanticType';
import { cloneElement } from '../_util/reactNode';
import Button from '../button/Button';
import type { ButtonProps, ButtonSemanticType } from '../button/Button';
import DisabledContext from '../config-provider/DisabledContext';
import { useComponentConfig } from '../config-provider/context';
import useSize from '../config-provider/hooks/useSize';
import Compact, { useCompactItemContext } from '../space/Compact';
import type { InputProps, InputRef } from './Input';
import Input from './Input';
import useStyle from './style/search';

export type InputSearchSemanticType = {
  classNames?: {
    root?: string;
    input?: string;
    prefix?: string;
    suffix?: string;
    clear?: string;
    count?: string;
    button?: ButtonSemanticType['classNames'];
  };
  styles?: {
    root?: React.CSSProperties;
    input?: React.CSSProperties;
    prefix?: React.CSSProperties;
    suffix?: React.CSSProperties;
    clear?: React.CSSProperties;
    count?: React.CSSProperties;
    button?: ButtonSemanticType['styles'];
  };
};

export type InputSearchSemanticAllType = GenerateSemantic<InputSearchSemanticType, SearchProps>;

export interface SearchProps extends InputProps {
  inputPrefixCls?: string;
  onSearch?: (
    value: string,
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement>
      | React.KeyboardEvent<HTMLInputElement>,
    info?: {
      source?: 'clear' | 'input';
    },
  ) => void;
  searchIcon?: React.ReactNode;
  enterButton?: React.ReactNode;
  loading?: boolean;
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  classNames?: InputSearchSemanticAllType['classNamesAndFn'];
  styles?: InputSearchSemanticAllType['stylesAndFn'];
}

const Search = React.forwardRef<InputRef, SearchProps>((props, ref) => {
    throw new Error("STUB");
});

if (process.env.NODE_ENV !== 'production') {
  Search.displayName = 'Search';
}

export default Search;
