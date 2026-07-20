import React from 'react';
import { Calendar, theme } from 'antd';
import type { CalendarProps } from 'antd';
import { createStyles } from 'antd-style';
import { clsx } from 'clsx';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

const useStyle = createStyles(({ cssVar, css }) => {
    throw new Error("STUB");
});

export interface CalendarEvent {
  key: string;
  title: string;
  start: Dayjs;
  end: Dayjs;
  color: string;
}

const getEvents = (token: ReturnType<typeof theme.useToken>['token']): CalendarEvent[] => [
  {
    key: 'release',
    title: 'Release window',
    start: dayjs('2026-01-08'),
    end: dayjs('2026-01-10'),
    color: token.colorPrimary,
  },
  {
    key: 'design-review',
    title: 'Design review',
    start: dayjs('2026-01-14'),
    end: dayjs('2026-01-14'),
    color: token.colorSuccess,
  },
  {
    key: 'maintenance',
    title: 'Maintenance',
    start: dayjs('2026-01-21'),
    end: dayjs('2026-01-24'),
    color: token.colorWarning,
  },
  {
    key: 'bug-fix',
    title: 'Bug fix',
    start: dayjs('2026-01-30'),
    end: dayjs('2026-01-31'),
    color: token.colorError,
  },
];

const isInRange = (current: Dayjs, event: CalendarEvent) => {
  return !current.isBefore(event.start, 'day') && !current.isAfter(event.end, 'day');
};

const getRangePosition = (current: Dayjs, event: CalendarEvent) => {
  const starts = current.isSame(event.start, 'day');
  const ends = current.isSame(event.end, 'day');

  if (starts && ends) {
    return 'single';
  }

  if (starts) {
    return 'start';
  }

  if (ends) {
    return 'end';
  }

  return 'middle';
};

const App: React.FC = () => {
    throw new Error("STUB");
};

export default App;
