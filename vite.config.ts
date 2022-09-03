/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import unocss from 'unocss/vite'
import autoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    react(),
    unocss({
      configFile: 'unocss.config.ts',
    }),
    autoImport({
      imports: [
        'react',
        'mobx',
        'mobx-react-lite',
      ],
      dirs: [
        './src/hooks',
      ],
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
