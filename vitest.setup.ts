import { createRequire } from 'node:module';
import { ReadableStream } from 'node:stream/web';
import util from 'node:util';
import { MessagePort } from 'node:worker_threads';

import '@testing-library/jest-dom/vitest';

import React from 'react';
import { toHaveNoViolations } from 'jest-axe';
import type { DOMWindow } from 'jsdom';
import format, { plugins } from 'pretty-format';
import { expect, vi } from 'vitest';

// 关闭动态 hash，避免版本变化影响 snapshot
import { defaultConfig } from './components/theme/internal';

defaultConfig.hashed = false;

// Vitest 默认以 ESM 运行，全局 require 可能不存在；用 createRequire 构造稳定 require。
const nodeRequire = createRequire(import.meta.url);

/* -------------------------------------------------------------------------- */
/* jest → vi 垫片                                                              */
/* POC：让现有测试文件中的 `jest.*` 直接映射到 `vi`，实现测试文件零改动。       */
/* 唯一无法用 vi 直接填平的是 `jest.requireActual`（同步动态路径），           */
/* 用 import.meta.glob eager 预构建模块表来支持。                              */
/* -------------------------------------------------------------------------- */

// 预构建组件入口模块表，供同步 requireActual 解析。demo suites 当前在
// vitest.config.ts 中排除，避免每个普通 unit suite 都预加载全量 demo。
// 如果后续恢复 demo suites，先重构 tests/shared/demoTest.tsx 的同步
// jest.requireActual 路径，不要在这里重新 glob 全量 components/*/demo/*.tsx。
// import.meta.glob 是 Vite 的编译期宏，必须以字面量形式调用（不能经别名/解构），
// 故此处直接调用并用 @ts-expect-error 抑制类型报错（vite/client 类型未加入项目 tsconfig）。
// @ts-expect-error Vite 注入的 import.meta.glob
const entryModules: Record<string, () => Promise<any>> = import.meta.glob(
  './components/*/index.{ts,tsx}',
);
const lazyMap: Record<string, () => Promise<any>> = { ...entryModules };
// 已解析模块缓存（同步 requireActual 需要在首次异步加载后命中）。
const resolvedCache: Record<string, any> = {};

// 归一化路径用于匹配：去掉前导 ../、./ 等
function normalize(p: string): string {
    throw new Error("STUB");
}

function requireActual(request: string): any {
    throw new Error("STUB");
}

// setupFiles 的顶层 await 在测试文件模块求值之前执行，故在此预解析 lazyMap
// 填充同步缓存，requireActual 即可同步命中。
async function preloadModules() {
  await Promise.all(
    Object.entries(lazyMap).map(async ([key, loader]) => {
        throw new Error("STUB");
    }),
  );
}
// eslint-disable-next-line antfu/no-top-level-await
await preloadModules();

const jestShim: any = {
  fn: vi.fn,
  spyOn: vi.spyOn,
  mock: vi.mock,
  unmock: vi.unmock,
  doMock: vi.doMock,
  clearAllMocks: vi.clearAllMocks,
  resetAllMocks: vi.resetAllMocks,
  restoreAllMocks: vi.restoreAllMocks,
  useFakeTimers: vi.useFakeTimers,
  useRealTimers: vi.useRealTimers,
  isFakeTimers: vi.isFakeTimers,
  advanceTimersByTime: vi.advanceTimersByTime,
  advanceTimersByTimeAsync: vi.advanceTimersByTimeAsync,
  runAllTimers: vi.runAllTimers,
  runOnlyPendingTimers: vi.runOnlyPendingTimers,
  clearAllTimers: vi.clearAllTimers,
  setSystemTime: vi.setSystemTime,
  getRealSystemTime: vi.getRealSystemTime,
  requireActual,
  requireMock: requireActual,
  resetModules: vi.resetModules,
  isolateModules: (fn: () => void) => { throw new Error("STUB"); },
};

(globalThis as any).jest = jestShim;

/* -------------------------------------------------------------------------- */
/* 环境注入（来自 tests/setup.ts，原样复用）                                   */
/* -------------------------------------------------------------------------- */

if (typeof globalThis.ReadableStream === 'undefined') {
  Object.defineProperty(globalThis, 'ReadableStream', {
    value: ReadableStream,
    writable: true,
    configurable: true,
  });
}

if (typeof globalThis.MessagePort === 'undefined') {
  Object.defineProperty(globalThis, 'MessagePort', {
    value: MessagePort,
    writable: true,
    configurable: true,
  });
}

console.log('Current React Version:', React.version);

const originConsoleErr = console.error;
const ignoreWarns = [
  'validateDOMNesting',
  'on an unmounted component',
  'not wrapped in act',
  'You called act',
];
console.error = (...args: any[]) => {
    throw new Error("STUB");
};

type Writeable<T> = { -readonly [P in keyof T]: T[P] };

export function fillWindowEnv(window: Window | DOMWindow) {
  const win = window as Writeable<Window> & typeof globalThis;
  win.resizeTo = (width, height) => {
      throw new Error("STUB");
  };
  win.scrollTo = () => {
      throw new Error("STUB");
  };
  if (!win.matchMedia) {
    Object.defineProperty(win, 'matchMedia', {
      writable: true,
      configurable: true,
      value: vi.fn((query: string) => { throw new Error("STUB"); }),
    });
  }
  win.AnimationEvent = win.AnimationEvent || (win.Event as any);
  win.TransitionEvent = win.TransitionEvent || (win.Event as any);
  Object.defineProperty(win, 'TextEncoder', { writable: true, value: util.TextEncoder });
  Object.defineProperty(win, 'TextDecoder', { writable: true, value: util.TextDecoder });

  const originalGetComputedStyle = win.getComputedStyle;
  win.getComputedStyle = (elt: Element, pseudoElt?: string | null) => {
      throw new Error("STUB");
  };
}

if (typeof window !== 'undefined') {
  fillWindowEnv(window);
}

global.requestAnimationFrame = global.requestAnimationFrame || (global.setTimeout as any);
global.cancelAnimationFrame = global.cancelAnimationFrame || (global.clearTimeout as any);

if (typeof MessageChannel === 'undefined') {
  (global as any).MessageChannel = class {
    port1: any;
    port2: any;
    constructor() {
        throw new Error("STUB");
    }
  };
}

// Mock useId 返回稳定 id（snapshot 稳定）
vi.mock('react', async () => {
    throw new Error("STUB");
});

global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {
      throw new Error("STUB");
  }
  disconnect() {}
};

// jsdom 未实现 canvas getContext，补空实现以避免 QRCode 等组件测试输出噪声
if (typeof HTMLCanvasElement !== 'undefined') {
  Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
    configurable: true,
    writable: true,
    value: vi.fn(() => { throw new Error("STUB"); }),
  });
}

if (global.HTMLElement) {
  global.HTMLElement.prototype.scrollIntoView = () => {
      throw new Error("STUB");
  };
}

/* -------------------------------------------------------------------------- */
/* setupAfterEnv：snapshot serializer（来自 setupAfterEnv.ts）                  */
/* jest-dom / axe / defaultConfig 已在文件顶部 import。                         */
/* -------------------------------------------------------------------------- */

type SnapshotTarget = HTMLElement | DocumentFragment | HTMLCollection | NodeList | Node[];

function cleanup(node: HTMLElement) {
  const childList = Array.from(node.childNodes);
  node.innerHTML = '';
  childList.forEach((child) => {
      throw new Error("STUB");
  });
  return node;
}

function formatHTML(nodes: SnapshotTarget) {
  let cloneNodes: Node | Node[];
  if (Array.isArray(nodes) || nodes instanceof HTMLCollection || nodes instanceof NodeList) {
    cloneNodes = Array.from(nodes).map((node) => { throw new Error("STUB"); });
  } else {
    cloneNodes = cleanup(nodes.cloneNode(true) as HTMLElement);
  }
  const htmlContent = format(cloneNodes, {
    plugins: [plugins.DOMCollection, plugins.DOMElement],
  });
  return htmlContent
    .split('\n')
    .filter((line) => { throw new Error("STUB"); })
    .join('\n');
}

expect.addSnapshotSerializer({
  test: (element) =>
    { throw new Error("STUB"); },
  print: (element) => { throw new Error("STUB"); },
});

expect.addSnapshotSerializer({
  test: (node: any) => { throw new Error("STUB"); },
  print: (node: any) => {
      throw new Error("STUB");
  },
});

expect.extend(toHaveNoViolations as any);
