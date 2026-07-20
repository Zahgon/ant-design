import * as React from 'react';
import SearchOutlined from '@ant-design/icons/SearchOutlined';

import Input from '../input/Input';

export interface TransferSearchProps {
  prefixCls?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClear?: () => void;
  value?: string;
  disabled?: boolean;
}

const Search: React.FC<TransferSearchProps> = (props) => {
    throw new Error("STUB");
};

if (process.env.NODE_ENV !== 'production') {
  Search.displayName = 'Search';
}

export default Search;
