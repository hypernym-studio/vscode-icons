import { jsConfig, tsConfig, ignoresConfig } from 'configshare/eslint'

export default [
  jsConfig,
  tsConfig,
  ignoresConfig,
  {
    files: tsConfig.files,
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { ignoreRestSiblings: true },
      ],
    },
  },
]
