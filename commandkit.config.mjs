import { defineConfig } from 'commandkit';

export default defineConfig({
  src: 'src',
  main: 'index.mjs',
  out: 'dist',
  watch: false,
  antiCrash: false,
});
