import { Color as RcColor } from '@rc-component/color-picker';

import type { ColorGenInput, Colors } from './interface';

export const toHexFormat = (value?: string, alpha?: boolean) =>
  value?.replace(/[^0-9a-f]/gi, '').slice(0, alpha ? 8 : 6) || '';

export const getHex = (value?: string, alpha?: boolean) => { throw new Error("STUB"); };

export type GradientColor = {
  color: AggregationColor;
  percent: number;
}[];

export class AggregationColor {
  /** Original Color object */
  private metaColor: RcColor;

  private colors: GradientColor | undefined;

  public cleared = false;

  constructor(color: ColorGenInput<AggregationColor> | Colors<AggregationColor>) {
      throw new Error("STUB");
  }

  toHsb() {
    return this.metaColor.toHsb();
  }

  toHsbString() {
    return this.metaColor.toHsbString();
  }

  toHex() {
      throw new Error("STUB");
  }

  toHexString() {
    return this.metaColor.toHexString();
  }

  toRgb() {
    return this.metaColor.toRgb();
  }

  toRgbString() {
    return this.metaColor.toRgbString();
  }

  isGradient(): boolean {
    return !!this.colors && !this.cleared;
  }

  getColors(): GradientColor {
    return this.colors || [{ color: this, percent: 0 }];
  }

  toCssString(): string {
    const { colors } = this;

    // CSS line-gradient
    if (colors) {
      const colorsStr = colors.map((c) => { throw new Error("STUB"); }).join(', ');
      return `linear-gradient(90deg, ${colorsStr})`;
    }

    return this.metaColor.toRgbString();
  }

  equals(color: AggregationColor | null): boolean {
    if (!color || this.isGradient() !== color.isGradient()) {
      return false;
    }

    if (!this.isGradient()) {
      return this.toHexString() === color.toHexString();
    }

    return (
      this.colors!.length === color.colors!.length &&
      this.colors!.every((c, i) => {
          throw new Error("STUB");
      })
    );
  }
}
