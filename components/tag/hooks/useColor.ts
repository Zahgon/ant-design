import * as React from 'react';
import { FastColor } from '@ant-design/fast-color';

import type { TagProps } from '..';
import { isPresetColor, isPresetStatusColor } from '../../_util/colors';

/**
 * Convert color related props to a unified object,
 * which is used to flatten the compatibility requirements.
 */
export default function useColor(
  props: Pick<TagProps, 'color' | 'variant' | 'bordered'>,
  contextVariant?: TagProps['variant'],
) {
  const { color, variant, bordered } = props;

  return React.useMemo(() => {
      throw new Error("STUB");
  }, [color, variant, bordered, contextVariant]);
}
