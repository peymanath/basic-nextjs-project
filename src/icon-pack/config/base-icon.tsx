'use client';

import React from 'react';

import type { SvgIconType } from './icon.types';

export const BaseIcon: React.FC<SvgIconType> = ({
  color = 'currentColor',
  width = 24,
  height = 24,
  children,
  viewBox = '0 0 24 24',
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={viewBox}
      {...rest}>
      {children}
    </svg>
  );
};

export default BaseIcon;
