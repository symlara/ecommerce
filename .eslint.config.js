import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default [
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  {
    overrides: [
      // override "simple-import-sort" config
      {
        files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
        rules: {
          'simple-import-sort/imports': [
            'error',
            {
              groups: [
                // Packages `react` related packages come first.
                ['^react', '^@?\\w'],
                // Internal packages.
                ['^(@|components)(/.*|$)'],
                // Side effect imports.
                ['^\\u0000'],
                // Parent imports. Put `..` last.
                ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                // Other relative imports. Put same-folder imports and `.` last.
                ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                // Style imports.
                ['^.+\\.?(css)$'],
              ],
            },
          ],
        },
      },
    ],
  },
]
