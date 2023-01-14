import { defineConfig } from 'vitest/config'
import React from '@vitejs/plugin-react-swc'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    React(),
    UnoCSS(),
    AutoImport({
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
    environment: 'jsdom',
  },
})
