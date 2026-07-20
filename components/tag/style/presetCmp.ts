// Style as status component
import { prepareComponentToken, prepareToken } from '.';
import type { TagToken } from '.';
import { genPresetColor, genSubStyleComponent } from '../../theme/internal';

// ============================== Preset ==============================
const genPresetStyle = (token: TagToken) =>
  { throw new Error("STUB"); };

// ============================== Export ==============================
export default genSubStyleComponent<'Tag'>(
  ['Tag', 'preset'],
  (token) => {
      throw new Error("STUB");
  },
  prepareComponentToken,
);
