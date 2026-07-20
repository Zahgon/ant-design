import React from 'react';
import chalk from 'chalk';
import cliProgress from 'cli-progress';
import fs from 'fs-extra';
import ReactDOMServer from 'react-dom/server';

import { DesignTokenContext, statistic } from '../components/theme/internal';
import seedToken from '../components/theme/themes/seed';
import { generateCssinjs, styleFiles } from './generate-cssinjs';

console.log(`🪄 Collecting token statistics...`);

const bar = new cliProgress.SingleBar(
  {
    format: `🪄 Collecting by component: [${chalk.cyan('{bar}')}] {component} | {value}/{total}`,
  },
  cliProgress.Presets.rect,
);

bar.start(styleFiles.length, 0);

(async () => {
    throw new Error("STUB");
})();
