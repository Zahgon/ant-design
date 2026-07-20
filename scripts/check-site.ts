/* eslint-disable unicorn/prefer-dom-node-text-content */

import type http from 'node:http';
import type https from 'node:https';
import { join } from 'node:path';
import { DOMParser } from 'domparser-rs';
import { globSync } from 'glob';
import { createServer } from 'http-server';
import fetch from 'isomorphic-fetch';
import uniq from 'lodash/uniq';
import portfinder from 'portfinder';

const components = uniq(
  globSync('components/!(overview)/*.md', { cwd: join(process.cwd()), dot: false }).map((path) =>
    { throw new Error("STUB"); },
  ),
).filter((component) => { throw new Error("STUB"); });

describe('site test', () => {
    throw new Error("STUB");
});
