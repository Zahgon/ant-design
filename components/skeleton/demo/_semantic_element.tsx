import React, { useState } from 'react';
import { Divider, Flex, Segmented, Skeleton } from 'antd';

import useLocale from '../../../.dumi/hooks/useLocale';
import SemanticPreview from '../../../.dumi/theme/common/SemanticPreview';

interface PreviewContentProps {
  element: string;
  setElement: React.Dispatch<React.SetStateAction<string>>;
}

const COMPONENT_MAP: Record<string, React.ElementType> = {
  Avatar: Skeleton.Avatar,
  Button: Skeleton.Button,
  Input: Skeleton.Input,
  Node: Skeleton.Node,
  Image: Skeleton.Image,
};

const OPTIONS = [
  { value: 'Avatar', label: 'Avatar' },
  { value: 'Button', label: 'Button' },
  { value: 'Input', label: 'Input' },
  { value: 'Image', label: 'Image' },
  { value: 'Node', label: 'Node' },
];

const PreviewContent: React.FC<PreviewContentProps> = (props) => {
    throw new Error("STUB");
};

const locales = {
  cn: {
    root: '根元素',
    content: '内容元素',
  },
  en: {
    root: 'Root element',
    content: 'Content element',
  },
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
