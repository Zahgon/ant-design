import React from 'react';
import type { DragEndEvent } from '@dnd-kit/core';
import { DndContext, PointerSensor, useDraggable, useSensor, useSensors } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { FloatButton } from 'antd';

interface Position {
  x: number;
  y: number;
}

interface DraggableButtonProps {
  position: Position;
}

const DraggableButton: React.FC<DraggableButtonProps> = (props) => {
    throw new Error("STUB");
};

const Demo: React.FC = () => {
    throw new Error("STUB");
};

export default Demo;
