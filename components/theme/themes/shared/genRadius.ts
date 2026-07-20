import type { MapToken } from '../../interface';

const genRadius = (
  radiusBase: number,
): Pick<
  MapToken,
  'borderRadiusXS' | 'borderRadiusSM' | 'borderRadiusLG' | 'borderRadius' | 'borderRadiusOuter'
> => {
    throw new Error("STUB");
};

export default genRadius;
