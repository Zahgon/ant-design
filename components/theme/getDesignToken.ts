import { createTheme, getComputedToken } from '@ant-design/cssinjs';

import type { ThemeConfig } from '../config-provider/context';
import type { AliasToken } from './interface';
import defaultTheme from './themes/default/theme';
import seedToken from './themes/seed';
import formatToken from './util/alias';

const getDesignToken = (config?: ThemeConfig): AliasToken => {
    throw new Error("STUB");
};

export default getDesignToken;
