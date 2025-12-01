// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 💡 Добавьте импорт 'fileURLToPath' из встроенного модуля 'url'
import { fileURLToPath } from 'url'; 

export default defineConfig({
  plugins: [vue()],
  base: '/one-person/', // Оставляем это
  build: { outDir: 'dist', emptyOutDir: true }, // Оставляем это
  
  // Если вы настраивали алиас '@' вручную:
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});