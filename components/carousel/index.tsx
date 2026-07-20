import * as React from 'react';
import type { Settings } from '@ant-design/react-slick';
import SlickCarousel from '@ant-design/react-slick';
import { toArray } from '@rc-component/util';
import { clsx } from 'clsx';

import { isPlainObject } from '../_util/is';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import useStyle, { DotDuration } from './style';

export type CarouselEffect = 'scrollx' | 'fade';

export type DotPlacement = 'top' | 'bottom' | 'start' | 'end';

// Carousel
export interface CarouselProps extends Omit<Settings, 'dots' | 'dotsClass' | 'autoplay'> {
  effect?: CarouselEffect;
  style?: React.CSSProperties;
  prefixCls?: string;
  rootClassName?: string;
  id?: string;
  slickGoTo?: number;
  /** @deprecated Please use `dotPlacement` instead  */
  dotPosition?: DotPlacement | 'left' | 'right';
  dotPlacement?: DotPlacement;
  children?: React.ReactNode;
  dots?: boolean | { className?: string };
  waitForAnimate?: boolean;
  autoplay?: boolean | { dotDuration?: boolean };
}
export interface CarouselRef {
  goTo: (slide: number, dontAnimate?: boolean) => void;
  next: () => void;
  prev: () => void;
  autoPlay: (playType?: 'update' | 'leave' | 'blur') => void;
  innerSlider: any;
}

const dotsClass = 'slick-dots';

interface ArrowType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  currentSlide?: number;
  slideCount?: number;
}

const ArrowButton: React.FC<ArrowType> = ({ currentSlide, slideCount, ...rest }) => { throw new Error("STUB"); };

const Carousel = React.forwardRef<CarouselRef, CarouselProps>((props, ref) => {
    throw new Error("STUB");
});

if (process.env.NODE_ENV !== 'production') {
  Carousel.displayName = 'Carousel';
}

export default Carousel;
