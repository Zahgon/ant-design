import React, { useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Input, Tag, theme } from 'antd';
import { AnimatePresence, motion } from 'motion/react';

const tagGroupStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 8,
  marginBottom: 8,
};

const tagMotionVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.1 } },
  exit: { opacity: 0, width: 0, scale: 0, transition: { duration: 0.2 } },
};

const MotionTag = motion.create(Tag);

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
