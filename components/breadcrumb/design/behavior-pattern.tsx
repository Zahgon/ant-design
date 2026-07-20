import React from 'react';

import useLocale from '../../../.dumi/hooks/useLocale';
import BehaviorMap from '../../../.dumi/theme/common/BehaviorMap';

const locales = {
  cn: {
    title: '了解当前所处页面的位置并向上导航',
    determineLocation: '确定位置',
    understandCurrentPageLocation: '了解当前页面的位置',
    understandSystemHierarchy: '了解系统层级结构',
    upwardNavigation: '向上导航',
    quickNavigation: '快捷导航',
  },
  en: {
    title: 'Understand the location of the current page and navigate upward',
    determineLocation: 'Determine Location',
    understandCurrentPageLocation: 'Understand Current Page Location',
    understandSystemHierarchy: 'Understand System Hierarchy',
    upwardNavigation: 'Upward Navigation',
    quickNavigation: 'Quick Navigation',
  },
};

const BehaviorPattern: React.FC = () => {
    throw new Error("STUB");
};

export default BehaviorPattern;
