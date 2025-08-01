import js from '@eslint/js';
import fsdArchitectureChecker from 'eslint-plugin-fsd-architecture-checker';
import pluginImport from 'eslint-plugin-import';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // Ignore files
  {
    ignores: ['dist/**', 'build/**', 'node_modules/**', 'public/**', '.vite/**', '**/*.config.*', '*.d.ts'],
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strict,
      react.configs.flat.recommended,
      eslintPluginPrettier
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'fsd-architecture-checker': fsdArchitectureChecker,
      react,
      import: pluginImport,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
      'fsd-architecture-checker': {
        srcPath: './src',
        layers: {
          app: 'app',
          processes: 'processes',
          pages: 'pages',
          widgets: 'widgets',
          features: 'features',
          entities: 'entities',
          shared: 'shared',
        },
      },
    },
    rules: {
      // General rules
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': 'off',

      // TypeScript rules
      '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'never' }],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        { accessibility: 'explicit', overrides: { constructors: 'off' } },
      ],
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',

      // React rules
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,

      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // React Refresh
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Import rules
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '~/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '**/*.css',
              group: 'index',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          named: true,
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          warnOnUnassignedImports: true,
        },
      ],
      'import/no-duplicates': ['error', { 'prefer-inline': true }],

      // FSD rules
      'fsd-architecture-checker/import-path-checker': ['error', { alias: '~' }],
      'fsd-architecture-checker/layers-imports-order': ['error', { alias: '~' }],
    },
  },

  // Special rules for types files
  {
    files: ['**/*.types.ts', '**/*types.ts', '**/types.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
    },
  },
);
