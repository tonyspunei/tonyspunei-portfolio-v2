import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  plugins: [sveltekit()],
  define: {
    'process.env': process.env
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  },
  resolve: {
    alias: {
      $: path.resolve(__dirname, './src')
    }
  }
});
