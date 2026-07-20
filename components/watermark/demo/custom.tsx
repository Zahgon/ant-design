import React, { useState } from 'react';
import { ColorPicker, Flex, Form, Input, InputNumber, Slider, Typography, Watermark } from 'antd';
import type { ColorPickerProps, GetProp, WatermarkProps } from 'antd';

type Color = Extract<GetProp<ColorPickerProps, 'value'>, string | { cleared: any }>;

const { Paragraph } = Typography;

interface WatermarkConfig {
  content: string;
  color: string | Color;
  fontSize: number;
  zIndex: number;
  rotate: number;
  gap: [number, number];
  offset?: [number, number];
}

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
