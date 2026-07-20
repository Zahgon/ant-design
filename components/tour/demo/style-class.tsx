import React, { useRef, useState } from 'react';
import { Button, Divider, Flex, Space, Tour } from 'antd';
import type { GetProp, TourProps, TourStepProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const btnProps: {
  nextButtonProps: TourStepProps['nextButtonProps'];
  prevButtonProps: TourStepProps['prevButtonProps'];
} = {
  nextButtonProps: {
    style: {
      border: '1px solid #CDC1FF',
      color: '#CDC1FF',
    },
  },
  prevButtonProps: {
    style: {
      backgroundColor: '#CDC1FF',
      color: '#fff',
    },
  },
};

const classNames = createStaticStyles(({ css }) => { throw new Error("STUB"); });

const stylesObject: TourProps['styles'] = {
  mask: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  section: {
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    border: '2px solid #4096ff',
  },
  cover: {
    borderRadius: '12px 12px 0 0',
  },
};

const stylesFunction: TourProps['styles'] = (info): GetProp<TourProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
