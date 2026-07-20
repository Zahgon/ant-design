import React, { useContext, useMemo } from 'react';
import { HolderOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import type { DragEndEvent, DraggableAttributes, DraggableSyntheticListeners } from '@dnd-kit/core';
import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button, Form, Input, Space } from 'antd';

const onFinish = (values: any) => {
  console.log('Received values of form:', values);
};

interface RowContextProps {
  setActivatorNodeRef?: (element: HTMLElement | null) => void;
  listeners?: DraggableSyntheticListeners;
  attributes?: DraggableAttributes;
}

const RowContext = React.createContext<RowContextProps>({});

const DragHandle: React.FC = () => {
    throw new Error("STUB");
};

interface SortableItemProps {
  id: number;
  children?: React.ReactNode;
}

const SortableItem: React.FC<SortableItemProps> = ({ id, children }) => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
