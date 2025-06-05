import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const aliases = {
  '~': resolve(__dirname, './src'),
};

export default defineConfig(() => {
  return {
    plugins: [react()],
    base: '/',
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
    assetsInclude: ['./src/**/*.lottie'],
    server: {
      port: 3000,
      open: true,
    },
  };
});
