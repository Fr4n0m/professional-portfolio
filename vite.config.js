import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve('./src/components'),
      '@ui': path.resolve('./src/components/ui'),
      '@utils': path.resolve('./src/utils'),
      '@icons': path.resolve('./src/icons'),
      '@layouts': path.resolve('./src/layouts'),
      '@styles': path.resolve('./src/styles'),
      '@scripts': path.resolve('./src/scripts'),
      '@pages': path.resolve('./src/pages'),
      '@translations': path.resolve('./src/translations'),
      '@types': path.resolve('./src/types'),
      '@config': path.resolve('./src/config'),
      '@i18n': path.resolve('./src/i18n'),
      '../i18n/utils': path.resolve('./src/i18n/utils')
    }
  },
  server: {
    fs: {
      strict: false
    }
  }
});
