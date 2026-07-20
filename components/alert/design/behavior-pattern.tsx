import React from 'react';

import useLocale from '../../../.dumi/hooks/useLocale';
import BehaviorMap from '../../../.dumi/theme/common/BehaviorMap';

const locales = {
  cn: {
    title: '了解页面/模块内需要关注的提示',
    understandAlertInfo: '了解提示信息',
    understandAlertContent: '了解提示内容',
    understandAlertType: '了解提示类型',
    performAlertOperations: '针对提示进行操作',
  },
  en: {
    title: 'Understand alerts that need attention within pages/modules',
    understandAlertInfo: 'Understand Alert Information',
    understandAlertContent: 'Understand Alert Content',
    understandAlertType: 'Understand Alert Type',
    performAlertOperations: 'Perform Operations on Alerts',
  },
};

const BehaviorPattern: React.FC = () => {
    throw new Error("STUB");
};

export default BehaviorPattern;
