import React from 'react';
import { AutoComplete } from 'antd';

import SelectSemanticTemplate from '../../../.dumi/theme/common/SelectSemanticTemplate';

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
  label: str.repeat(repeat),
});

const getPanelValue = (searchText: string) =>
  !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
