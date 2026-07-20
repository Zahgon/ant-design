import React from 'react';

import useLocale from '../../../.dumi/hooks/useLocale';
import BehaviorMap from '../../../.dumi/theme/common/BehaviorMap';

const locales = {
  cn: {
    title: '跳转页面',
    jumpToSpecificPage: '跳转至指定页面',
    adjustItemsPerPage: '调整单页展示条数',
    quickJump: '快速跳转',
    understandTotalData: '了解数据总量',
  },
  en: {
    title: 'Navigate Pages',
    jumpToSpecificPage: 'Jump to Specific Page',
    adjustItemsPerPage: 'Adjust Items Per Page',
    quickJump: 'Quick Jump',
    understandTotalData: 'Understand Total Data',
  },
};

const BehaviorPattern: React.FC = () => {
    throw new Error("STUB");
};

export default BehaviorPattern;
