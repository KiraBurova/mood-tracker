import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Header': './src/components/Header/Header',
        './Footer': './src/components/Footer/Footer',
        './Input': './src/components/Input/Input.tsx',
        './Button': './src/components/Button/Button.tsx',
        './Label': './src/components/Label/Label',
        './FormErrorMessage':
          './src/components/FormErrorMessage/FormErrorMessage',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
