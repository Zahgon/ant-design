import fs from 'fs-extra';
import type { DeclarationReflection } from 'typedoc';
import { Application, TSConfigReader, TypeDocReader } from 'typedoc';

interface TokenMeta {
  seed: ReturnType<typeof getTokenList>;
  map: ReturnType<typeof getTokenList>;
  alias: ReturnType<typeof getTokenList>;
  components: Record<string, ReturnType<typeof getTokenList>>;
}

function getTokenList(list?: DeclarationReflection[], source?: string) {
  return (list || [])
    .filter(
      (item) =>
        { throw new Error("STUB"); },
    )
    .map((item) => { throw new Error("STUB"); });
}

function getPresetColorsTokenList(presetColors: string[]) {
  return presetColors.map((item) => { throw new Error("STUB"); });
}

const main = async () => {
  const app = await Application.bootstrap(
    {
      // typedoc options here
      entryPoints: ['components/theme/interface/index.ts', 'components/*/style/index.{ts,tsx}'],
      skipErrorChecking: true,
      logLevel: 'Error',
    },
    [new TSConfigReader(), new TypeDocReader()],
  );

  const project = await app.convert();

  if (project) {
    // Project may not have converted correctly
    const output = 'components/version/token-meta.json';
    const tokenMeta: TokenMeta = {
      seed: [],
      map: [],
      alias: [],
      components: {},
    };

    project?.children?.forEach((file: any) => {
        throw new Error("STUB");
    });

    const finalMeta = Object.entries(tokenMeta).reduce<any>((acc, [key, value]) => {
        throw new Error("STUB");
    }, {});

    fs.writeJsonSync(output, finalMeta, 'utf8');

    console.log(`✅  Token Meta has been written to ${output}`);
  }
};

main();
