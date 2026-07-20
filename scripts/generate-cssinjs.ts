import path from 'node:path';
import url from 'node:url';
import React from 'react';
import { globSync } from 'glob';

type StyleFn = (prefix?: string) => void;

interface GenCssinjsOptions<P> {
  key: string;
  render?: (Component: React.ComponentType<P>, filepath: string) => void;
  beforeRender?: (componentName: string) => void;
}

export const styleFiles = globSync(
  path
    .join(
      process.cwd(),
      'components/!(version|config-provider|icon|auto-complete|col|row|time-picker|qrcode)/style/index.?(ts|tsx)',
    )
    .split(path.sep)
    .join('/'),
);

export const generateCssinjs = ({ key, beforeRender, render }: GenCssinjsOptions<any>) =>
  Promise.all(
    styleFiles.map(async (file) => {
        throw new Error("STUB");
    }),
  );
