import React, { useState } from 'react';
import { ColorPicker } from 'antd';
import type { ColorPickerProps, GetProp } from 'antd';

const { _InternalPanelDoNotUseOrYouWillBeFired: PureRenderColorPicker } = ColorPicker;

type Color = GetProp<ColorPickerProps, 'value'>;

const Demo: React.FC = () => {
    throw new Error("STUB");
};

export default Demo;
