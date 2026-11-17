import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      viteStaticCopy({
        targets: [
          {
            src: 'node_modules/tinymce/*',
            dest: 'tinymce',
          },
        ],
      }),
    ],

    define: {
      global: 'globalThis',
    },

    server: {
      port: 3000,
      host: '0.0.0.0',
      open: false,
      proxy: {
        '/api': {
          target: env.VITE_API_TARGET || 'http://localhost:9004',
          changeOrigin: true,
          secure: true,
        },
      },
    },

    build: {
      outDir: 'build',
    },
  };
});
