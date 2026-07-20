import React, { useState } from 'react';
import { closestCenter, DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from '@dnd-kit/sortable';
import { Flex, Tag } from 'antd';

interface Item {
  id: number;
  text: string;
}

interface DraggableTagProps {
  tag: Item;
}

const commonStyle: React.CSSProperties = {
  cursor: 'move',
  transition: 'unset', // Prevent element from shaking after drag
};

const DraggableTag: React.FC<DraggableTagProps> = (props) => {
    throw new Error("STUB");
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
