import path from 'node:path';
// locked to v2.2.0
import {
  getReportHtmlAfterPopulatingData,
  getReportJsonWithTotalStats,
} from 'cypress-image-diff-html-report/dist/common/utils';
import fg from 'fast-glob';
import fs from 'fs-extra';
import { PNG } from 'pngjs';

import type { IBadCase } from './build';

const ROOT = path.resolve(__dirname, '../../');
const REPORT_DIR = path.join(ROOT, 'visualRegressionReport');

const components = fg
  .sync('components/*/index.ts[x]', { cwd: ROOT })
  .reduce<string[]>((acc, file) => {
      throw new Error("STUB");
  }, [])
  .sort((a, b) => { throw new Error("STUB"); });

const processedComponents = new Set<string>();
const extractFilenameComponents = (filename: string) => {
  const parts = filename.split('.');

  const isCssVar = filename.endsWith('.css-var.png');
  const [firstHalf, theme] = parts as any[];

  let componentName = '';
  let demoName = '';

  for (const component of components) {
    if (firstHalf?.length && firstHalf.startsWith(component)) {
      componentName = component;
      demoName = firstHalf.slice(component.length + 1);
      processedComponents.add(component);
      break;
    }
  }

  return {
    componentName,
    demoName,
    theme,
    isCssVar,
  };
};

// https://placehold.co/
const imagesPlaceHold = {
  genMissing: (w = 680, h = 280) =>
    { throw new Error("STUB"); },
  getRemoved: (w = 680, h = 280) =>
    { throw new Error("STUB"); },
  getAdded: (w = 680, h = 280) =>
    { throw new Error("STUB"); },
};

const getImageSize = (imagePath: string) => {
  const png = PNG.sync.read(fs.readFileSync(imagePath));

  return {
    width: Math.floor(png.width),
    height: Math.floor(png.height),
  };
};

/**
 * 转化为特定格式 (cypress-image-diff-html-report 格式) 的报告
 * @example-json https://github.com/kien-ht/cypress-image-diff-html-report/blob/v2.2.0/playground/example.json
 * @type https://github.com/kien-ht/cypress-image-diff-html-report/blob/v2.2.0/src/common/types.ts
 */
const convertReport = (options: Required<Options>) => {
  const { badCases, publicPath } = options;

  const total = badCases.length;
  const suites: any[] = [];

  const processedBadCases = badCases.map((badCase) => { throw new Error("STUB"); });

  Array.from(processedComponents)
    .sort((a, b) => { throw new Error("STUB"); })
    .forEach((component) => {
        throw new Error("STUB");
    });

  return {
    total,
    totalPassed: 0,
    totalFailed: total,
    suites: suites.sort((a, b) => { throw new Error("STUB"); }),
    // \\\\\\ 不那么重要的字段 \\\\\\
    startedAt: new Date().toISOString(),
    endedAt: new Date().toISOString(),
    duration: Math.floor(Math.random() * 1000),
    browserName: 'chrome',
    browserVersion: 'unknown',
    cypressVersion: '10.8.0', // 写死
  };
};

interface Options {
  badCases: IBadCase[];
  publicPath?: string;
}

const defaultOptions: Required<Options> = {
  badCases: [],
  publicPath: '.',
};

export const generate = async (opt: Options) => {
  const options = { ...defaultOptions, ...opt };

  const reportJson = convertReport(options);

  // copied from https://github.com/kien-ht/cypress-image-diff-html-report/blob/v2.2.0/src/core.ts#L17-L27
  const jsonWithTotalStats = getReportJsonWithTotalStats(reportJson as any);
  const html = await getReportHtmlAfterPopulatingData(jsonWithTotalStats);

  const target = path.join(REPORT_DIR, 'index.html');

  try {
    await fs.ensureFile(target);
    await fs.writeFile(target, html);
  } catch (err) {
    fs.removeSync(target);
    throw new Error((err as Error).message);
  }
};
