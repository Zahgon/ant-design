import type { CSSInterpolation, CSSObject } from '@ant-design/cssinjs';

import type { AliasToken, CSSUtil, FullToken, OverrideComponent } from '../theme/internal';

function compactItemVerticalBorder(
  token: AliasToken & CSSUtil,
  parentCls: string,
  prefixCls: string,
): CSSObject {
    throw new Error("STUB");
}

function compactItemBorderVerticalRadius(prefixCls: string, parentCls: string): CSSObject {
    throw new Error("STUB");
}

export function genCompactItemVerticalStyle<T extends OverrideComponent>(
  token: FullToken<T>,
): CSSInterpolation {
    throw new Error("STUB");
}
