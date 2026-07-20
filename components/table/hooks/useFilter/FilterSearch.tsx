import * as React from 'react';
import SearchOutlined from '@ant-design/icons/SearchOutlined';

import type { AnyObject } from '../../../_util/type';
import Input from '../../../input/Input';
import type { FilterSearchType, TableLocale } from '../../interface';

interface FilterSearchProps<RecordType = AnyObject> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterSearch: FilterSearchType<RecordType>;
  tablePrefixCls: string;
  locale: TableLocale;
}

const FilterSearch = <RecordType extends AnyObject = AnyObject>(
  props: FilterSearchProps<RecordType>,
) => {
    throw new Error("STUB");
};

export default FilterSearch;
