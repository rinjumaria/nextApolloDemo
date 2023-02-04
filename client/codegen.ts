import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: '',
  documents: ['page/index.tsx'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;