import React from 'react';
import { createPortal } from 'react-dom';
import { clsx } from 'clsx';

export type BorderBeamEffectProps = {
  prefixCls: string;
  hostDom: HTMLElement | SVGElement | null;
  className?: string;
  style?: React.CSSProperties;
};

type BorderBeamEffectElementProps = Omit<BorderBeamEffectProps, 'hostDom'>;

const supportPortalHost = (hostDom: BorderBeamEffectProps['hostDom']): hostDom is HTMLElement =>
  typeof HTMLElement !== 'undefined' && hostDom instanceof HTMLElement;

const BorderBeamEffectElement: React.FC<BorderBeamEffectElementProps> = (props) => {
    throw new Error("STUB");
};

const BorderBeamEffect: React.FC<BorderBeamEffectProps> = (props) => {
    throw new Error("STUB");
};

export default BorderBeamEffect;
