import React, { useRef, useState } from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, message } from 'antd';
import { createStyles } from 'antd-style';
import type { ItemType } from 'antd/es/menu/interface';

interface SelectionInfo {
  text: string;
  x: number;
  y: number;
}

const labels: Record<string, string> = {
  mask: 'Mask keyword',
  mark: 'Mark keyword',
  search: 'Search keyword',
};

const useStyle = createStyles(({ cssVar, css }) => {
    throw new Error("STUB");
});

const items = Object.entries(labels).map<ItemType>(([key, label]) => { throw new Error("STUB"); });

const Demo: React.FC = () => {
    throw new Error("STUB");
};

export default Demo;
