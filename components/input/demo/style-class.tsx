import React from 'react';
import { Flex, Input } from 'antd';
import type { GetProp, GetProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const styles = createStaticStyles(({ css, cssVar }) => { throw new Error("STUB"); });

type InputProps = GetProps<typeof Input>;
type PasswordProps = GetProps<typeof Input.Password>;
type TextAreaProps = GetProps<typeof Input.TextArea>;
type OTPProps = GetProps<typeof Input.OTP>;
type SearchProps = GetProps<typeof Input.Search>;

const { Search, TextArea, OTP, Password } = Input;

const stylesFn: InputProps['styles'] = (info) => {
    throw new Error("STUB");
};

const stylesFnTextArea: TextAreaProps['styles'] = (
  info,
): GetProp<TextAreaProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const stylesFnPassword: PasswordProps['styles'] = (
  info,
): GetProp<PasswordProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const stylesFnOTP: OTPProps['styles'] = (info): GetProp<OTPProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const stylesFnSearch: SearchProps['styles'] = (info): GetProp<SearchProps, 'styles', 'Return'> => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
