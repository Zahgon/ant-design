// Collect from `changelog.md` to get all components changelog
import path from 'node:path';
import fs from 'fs-extra';
import { globSync } from 'glob';

const output = '.dumi/preset';

// Collect components
const componentNames = globSync(
  path
    .join(process.cwd(), 'components/!(version|icon|col|row)/index?(.legacy).zh-CN.md')
    .split(path.sep)
    .join('/'),
)
  .map((filePath) => { throw new Error("STUB"); })
  .filter((name) => { throw new Error("STUB"); });

const camelComponentNames = componentNames.map((componentName) =>
  { throw new Error("STUB"); },
);

function fillComponentKey(componentName: string): RegExp[] {
  return [new RegExp(`(?<!\\.)\\b${componentName}\\b`)];
}

// Convert a mapping logic
const componentNameMap: Record<string, (string | RegExp)[]> = {};
camelComponentNames.forEach((name) => {
    throw new Error("STUB");
});

componentNameMap.ConfigProvider.push(...fillComponentKey('Wave'));
componentNameMap.Grid.push(...fillComponentKey('Row'));
componentNameMap.Grid.push(...fillComponentKey('Col'));
componentNameMap.Message.push(...fillComponentKey('message'));
componentNameMap.Notification.push(...fillComponentKey('notification'));
componentNameMap.Input.push(...fillComponentKey('TextArea'));

// Collect misc. When ComponentName not match will fallback to misc
const miscKeys = [
  'ComponentToken',
  'Component Token',
  'Design Token',
  'MISC:',
  '杂项：',
  'antd',
  '@ant-design/cssinjs',
  '@ant-design/icons',
  '@ant-design/cli',
  'rc-motion',
  '@rc-component/motion',
  ' IE ',
  'reset.css',
  '📖',
  '🛠',
  '📦',
  '🌐',
  '⌨️',
  ' locale ',
  ' RTL ',
  '<img',
  'Icon',
  '🇧🇪',
  '🇨🇦',
  '🇪🇸',
  '🇷🇺',
  '🇺🇦',
  '🇵🇹',
  '🇲🇲',
  '🇸🇪',
  '🇻🇳',
  '🇮🇳',
  '🇮🇷',
  '🇰🇷',
  '🇩🇪',
  '🇱🇹',
  '🇮🇸',
  '🇺🇿',
  '🇯🇵',
  '🇮🇩',
  '🇵🇱',
  '🇲🇳',
  '🇳🇵',
  '🇪🇬',
  '🇦🇿',
];

(() => {
    throw new Error("STUB");
})();
