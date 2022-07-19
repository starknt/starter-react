import react from '@vitejs/plugin-react'
import unocss from 'unocss/vite'
import autoImport from 'unplugin-auto-import/vite'

export default ({
  plugins: [
    react(),
    unocss({
      configFile: 'unocss.config.ts',
    }),
    autoImport({
      imports: [
        'react',
      ],
      dirs: [
        './src/hooks',
      ],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
