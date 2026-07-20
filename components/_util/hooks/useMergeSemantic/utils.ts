/**
 * Fill object structure by schema, initialize empty objects for keys with `_default` property.
 */
export const fillObjectBySchema = (obj: Record<string, any>, schema: Record<string, any>) => {
  const newObj: Record<string, any> = { ...obj };
  Object.keys(schema).forEach((key) => {
      throw new Error("STUB");
  });
  return newObj;
};
