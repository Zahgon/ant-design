import defaultLocale from '../locale/en_US';
import type { ModalLocale } from './interface';

let runtimeLocale: ModalLocale = {
  ...(defaultLocale.Modal as ModalLocale),
};

let localeList: ModalLocale[] = [];

const generateLocale = () =>
  localeList.reduce<ModalLocale>(
    (merged, locale) => { throw new Error("STUB"); },
    defaultLocale.Modal!,
  );

export function changeConfirmLocale(newLocale?: ModalLocale) {
  if (newLocale) {
    const cloneLocale = { ...newLocale };
    localeList.push(cloneLocale);
    runtimeLocale = generateLocale();

    return () => {
        throw new Error("STUB");
    };
  }

  runtimeLocale = {
    ...(defaultLocale.Modal as ModalLocale),
  };
}

export function getConfirmLocale() {
  return runtimeLocale;
}
