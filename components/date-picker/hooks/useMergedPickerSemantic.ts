import * as React from 'react';
import { clsx } from 'clsx';

import { useMergeSemantic } from '../../_util/hooks/useMergeSemantic';
import type { AnyObject } from '../../_util/type';
import { useComponentConfig } from '../../config-provider/context';

const useMergedPickerSemantic = <P extends AnyObject = AnyObject>(
  pickerType: 'timePicker' | 'datePicker',
  classNames?: P['classNames'],
  styles?: P['styles'],
  popupClassName?: string,
  popupStyle?: React.CSSProperties,
  mergedProps?: P,
) => {
  const { classNames: contextClassNames, styles: contextStyles } = useComponentConfig(pickerType);

  const [mergedClassNames, mergedStyles] = useMergeSemantic(
    [contextClassNames as P['classNames'], classNames],
    [contextStyles as P['styles'], styles],
    { props: mergedProps as P },
    {
      popup: {
        _default: 'root',
      },
    },
  );

  return React.useMemo(() => {
      throw new Error("STUB");
  }, [mergedClassNames, mergedStyles, popupClassName, popupStyle]);
};

export default useMergedPickerSemantic;
