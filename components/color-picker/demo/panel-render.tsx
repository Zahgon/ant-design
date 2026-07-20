import React from 'react';
import { cyan, generate, green, presetPalettes, red } from '@ant-design/colors';
import { Col, ColorPicker, Divider, Row, Space, theme } from 'antd';
import type { ColorPickerProps } from 'antd';

type Presets = Required<ColorPickerProps>['presets'][number];

function genPresets(presets = presetPalettes) {
  return Object.entries(presets).map<Presets>(([label, colors]) => { throw new Error("STUB"); });
}

const HorizontalLayoutDemo = () => {
    throw new Error("STUB");
};

const BasicDemo = () => { throw new Error("STUB"); };

export default () => { throw new Error("STUB"); };
