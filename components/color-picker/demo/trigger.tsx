import React, { useMemo, useState } from 'react';
import { Button, ColorPicker } from 'antd';
import type { ColorPickerProps, GetProp } from 'antd';

type Color = Extract<GetProp<ColorPickerProps, 'value'>, string | { cleared: any }>;

const Demo: React.FC = () => {
    throw new Error("STUB");
};

export default Demo;
