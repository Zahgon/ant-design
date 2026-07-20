import { useMemo } from 'react';

import { useMergeSemantic } from '../../_util/hooks/useMergeSemantic';
import type { DirectionType } from '../../config-provider';
import { useComponentConfig } from '../../config-provider/context';
import type { BaseTypographyProps, TypographySemanticAllType } from '../Base';

export const useTypographySemantic = (
  customizePrefixCls?: string,
  classNames?: TypographySemanticAllType['classNamesAndFn'] | undefined,
  styles?: TypographySemanticAllType['stylesAndFn'] | undefined,
  typographyDirection?: DirectionType,
  props?: BaseTypographyProps,
) => {
  const {
    getPrefixCls,
    direction: contextDirection,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles,
  } = useComponentConfig('typography');

  const direction = typographyDirection ?? contextDirection;
  const prefixCls = getPrefixCls('typography', customizePrefixCls);

  const mergedProps: BaseTypographyProps = {
    ...props,
    prefixCls,
    direction,
  };

  const contextClassNamesObject = useMemo<TypographySemanticAllType['classNames']>(
    () => { throw new Error("STUB"); },
    [contextClassName],
  );
  const contextStylesObject = useMemo<TypographySemanticAllType['styles']>(
    () => { throw new Error("STUB"); },
    [contextStyle],
  );

  const [mergedClassNames, mergedStyles] = useMergeSemantic(
    [contextClassNamesObject, contextClassNames, classNames],
    [contextStylesObject, contextStyles, styles],
    {
      props: mergedProps,
    },
  );

  return [mergedClassNames, mergedStyles, prefixCls, direction] as const;
};
