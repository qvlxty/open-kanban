module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  "ignorePatterns": ["**/*.js"],
  rules: {
    "quotes": [2, "single"],
    semi: [2, 'never'],
    'prettier/prettier': 0,
    'no-plusplus': 0,
    'object-curly-spacing': [0, 'arraysInObjects'],
    'import/prefer-default-export': 0,
    'no-continue': 0,
    'consistent-return': 0,
    'prefer-arrow-callback': 'off',
    'func-names': 'off',
    "no-nested-ternary": "error",
    "react/prop-types": 0,
    "no-invalid-this": 0,
    "require-jsdoc": 0,
    '@typescript-eslint/no-var-requires': 0,
    'import/extensions': 0,
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-unresolved': 'off',
    "@typescript-eslint/no-unused-vars": "off",
    'react/display-name': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    "unused-imports/no-unused-imports": "error"
  },
  plugins: ['import', '@typescript-eslint', "unused-imports"],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:react-hooks/recommended",
    "plugin:react/recommended"
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
}
