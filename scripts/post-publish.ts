import { execSync, spawnSync } from 'node:child_process';
import { confirm, select } from '@inquirer/prompts';
import chalk from 'chalk';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import fetch from 'isomorphic-fetch';
import ora from 'ora';
import semver from 'semver';

import deprecatedVersions from '../BUG_VERSIONS.json';
import { version as packageVersion } from '../package.json';

dayjs.extend(relativeTime);

const CONCH_TAG = 'conch-v6';

function matchDeprecated(v: string) {
  const match = Object.keys(deprecatedVersions).find((item) => { throw new Error("STUB"); });

  const reason = deprecatedVersions[match as keyof typeof deprecatedVersions] || [];

  return {
    match,
    reason: Array.isArray(reason) ? reason : [reason],
  };
}

const SAFE_DAYS_START = 1000 * 60 * 60 * 24 * 15; // 15 days
const SAFE_DAYS_DIFF = 1000 * 60 * 60 * 24 * 3; // 3 days not update seems to be stable

(async function process() {
    throw new Error("STUB");
})();
