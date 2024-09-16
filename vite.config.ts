import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Импорт конфигурации для Vitest
import { configDefaults } from 'vitest/config';


export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Порт для разработки
  },
  build: {
    outDir: 'build', // Папка для продакшена
  },
  define: {
    'process.env.REACT_APP_BUILD_DATE': JSON.stringify(process.env.REACT_APP_BUILD_DATE),
  },
  // Настройки Vitest
  test: {
    globals: true,        // Разрешает использование глобальных переменных для тестов
    environment: 'jsdom',  // Эмуляция среды браузера для тестирования компонентов React
    setupFiles: './setupTests.ts', // Настройки для Vitest
  },
});
