import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const BASE_URL_DEV = '';
const BASE_URL_PROD = '/website/';
const aliases = {
  '~': resolve(__dirname, './src'),
};

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';

  return {
    plugins: [react()],
    base: isBuild ? BASE_URL_PROD : BASE_URL_DEV,
    build: {
      outDir: './build',
      emptyOutDir: true,
      assetsDir: 'assets',
    },
    resolve: {
      alias: aliases,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['**/*.test.{ts,tsx}'],
      setupFiles: './src/shared/config/tests/setup.ts',
      coverage: {
        reporter: ['text', 'json', 'html'],
      },
      alias: aliases,
    },
    server: {
      port: 3000,
      open: true,
    },
  };
});
