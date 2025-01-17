module.exports = {
  extends: ['plugin:@next/next/core-web-vitals', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      files: ['*.js', '*.cjs', '*.json', '*.md', '*.yml', '*.yaml'],
    },
    {
      files: ['./src/**/*.ts', './src/**/*.tsx'],
      rules: {
        'no-restricted-exports': 'off',
      },
    },
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  root: true,
}
