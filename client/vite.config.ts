import { defineConfig } from 'vitest/config';
import path from 'path';
import vue from '@vitejs/plugin-vue';

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true })],
  server: {
    port: 1717,
    host: '0.0.0.0',
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      '@components': `${path.resolve(__dirname, 'src/components')}`,
      '@views': `${path.resolve(__dirname, 'src/views')}`,
      '@store': `${path.resolve(__dirname, 'src/store')}`,
      '@assets': `${path.resolve(__dirname, 'src/assets')}`,
      '@composables': `${path.resolve(__dirname, 'src/composables')}`,
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
