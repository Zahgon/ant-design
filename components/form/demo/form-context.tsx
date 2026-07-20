import React, { useEffect, useRef, useState } from 'react';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Flex, Form, Input, InputNumber, Modal, Space, Typography } from 'antd';
import type { GetRef } from 'antd';

type FormInstance = GetRef<typeof Form>;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface UserType {
  name: string;
  age: string;
}

interface ModalFormProps {
  open: boolean;
  onCancel: () => void;
}

// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, open }: { form: FormInstance; open: boolean }) => {
  const prevOpenRef = useRef<boolean>(null);
  useEffect(() => {
      throw new Error("STUB");
  }, [open]);
  const prevOpen = prevOpenRef.current;

  useEffect(() => {
      throw new Error("STUB");
  }, [form, prevOpen, open]);
};

const ModalForm: React.FC<ModalFormProps> = ({ open, onCancel }) => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
