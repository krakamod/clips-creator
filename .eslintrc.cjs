module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard-with-typescript',
    'plugin:react-hooks/recommended',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'react-hooks',
  ],
  rules: {
    'no-multiple-empty-lines': ['error', { max: 2 }],
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
    }],
    'comma-dangle': 'off',
    'max-len': ['error', { code: 100, ignoreStrings: true, ignorePattern: '^\\s*// eslint-disable' }],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    'react/prop-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'warn',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-indent': [2, 2, { indentLogicalExpressions: true }],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-curly-spacing': [2, { when: 'never' }],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/self-closing-comp': 'error',
    'react/jsx-tag-spacing': [2, {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    'react/jsx-curly-brace-presence': [2, {
      props: 'never',
      children: 'never',
      propElementValues: 'always',
    }],
    'jsx-quotes': ['error', 'prefer-double'],
    'multiline-ternary': 'off',
  },
};
