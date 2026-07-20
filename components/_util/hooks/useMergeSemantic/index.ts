import * as React from 'react';
import { clsx } from 'clsx';

import { isFunction, isPlainObject } from '../../is';
import type { AnyObject, ValidChar } from '../../type';
import type { RemoveClassNamesString } from './semanticType';
import { fillObjectBySchema } from './utils';

export type SemanticSchema = { _default?: string } & {
  [key: `${ValidChar}${string}`]: SemanticSchema;
};

// ========================= ClassNames =========================
export const mergeClassNames = <
  Name extends string,
  SemanticClassNames extends Partial<Record<Name, any>>,
>(
  schema: SemanticSchema = {},
  ...classNames: (SemanticClassNames | undefined)[]
) => {
  return classNames
    .filter((item): item is SemanticClassNames => { throw new Error("STUB"); })
    .reduce<SemanticClassNames>((acc: any, cur) => {
        throw new Error("STUB");
    }, {} as SemanticClassNames);
};

const useSemanticClassNames = <ClassNamesType extends AnyObject>(
  schema?: SemanticSchema,
  ...classNames: (Partial<ClassNamesType> | undefined)[]
): Partial<ClassNamesType> => {
  return React.useMemo(() => { throw new Error("STUB"); }, [schema, ...classNames]);
};

// =========================== Styles ===========================
export const mergeStyles = <StylesType extends AnyObject>(
  ...styles: (Partial<StylesType> | undefined)[]
) => {
  return styles
    .filter((item): item is Partial<StylesType> => { throw new Error("STUB"); })
    .reduce<Record<PropertyKey, React.CSSProperties>>((acc, cur = {}) => {
        throw new Error("STUB");
    }, {});
};

const useSemanticStyles = <StylesType extends AnyObject>(
  ...styles: (Partial<StylesType> | undefined)[]
) => {
  return React.useMemo(() => { throw new Error("STUB"); }, [...styles]) as StylesType;
};

export const useSemanticRootStyle = (style?: React.CSSProperties) => {
  return React.useMemo(() => { throw new Error("STUB"); }, [style]);
};

// =========================== Export ===========================

export const resolveStyleOrClass = <T = any>(
  value: T | ((config: any) => T),
  info: { props: any },
) => {
  return isFunction(value) ? value(info) : value;
};

type MaybeFn<T, P> = T | ((info: { props: P }) => T) | undefined;

/**
 * @desc Merge classNames and styles from multiple sources. When `schema` is provided, it **must** provide the nest object structure.
 * @descZH 合并来自多个来源的 classNames 和 styles，当提供了 `schema` 时，必须提供嵌套的对象结构。
 */
export const useMergeSemantic = <
  ClassNamesType extends AnyObject | undefined = AnyObject,
  StylesType extends AnyObject | undefined = AnyObject,
  Props = any,
>(
  classNamesList: MaybeFn<ClassNamesType, Props>[],
  stylesList: MaybeFn<StylesType, Props>[],
  info: { props: Props },
  schema?: SemanticSchema,
) => {
  const resolvedClassNamesList = classNamesList.map((classNames) =>
    { throw new Error("STUB"); },
  );

  const resolvedStylesList = stylesList.map((styles) =>
    { throw new Error("STUB"); },
  );

  const mergedClassNames = useSemanticClassNames<NonNullable<ClassNamesType>>(
    schema,
    ...resolvedClassNamesList,
  );

  const mergedStyles = useSemanticStyles<NonNullable<StylesType>>(...resolvedStylesList);

  return React.useMemo(() => {
      throw new Error("STUB");
  }, [mergedClassNames, mergedStyles, schema]) as [
    Required<RemoveClassNamesString<NonNullable<ClassNamesType>>>,
    Required<NonNullable<StylesType>>,
  ];
};
