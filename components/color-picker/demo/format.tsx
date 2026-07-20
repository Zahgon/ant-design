import React, { useState } from 'react';
import { ColorPicker, Space } from 'antd';
import type { ColorPickerProps, GetProp } from 'antd';

type Color = Extract<GetProp<ColorPickerProps, 'value'>, string | { cleared: any }>;
type Format = GetProp<ColorPickerProps, 'format'>;

const HexCase: React.FC = () => {
    throw new Error("STUB");
};

const HsbCase: React.FC = () => {
    throw new Error("STUB");
};

const RgbCase: React.FC = () => {
    throw new Error("STUB");
};

const Demo: React.FC = () => { throw new Error("STUB"); };

export default Demo;
