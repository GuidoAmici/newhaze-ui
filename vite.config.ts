import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

// Preserve "use client" directive in the ESM output for Next.js App Router
function useClientDirective(): Plugin {
  return {
    name: 'use-client-directive',
    generateBundle(_, bundle) {
      for (const chunk of Object.values(bundle)) {
        if (chunk.type === 'chunk') {
          chunk.code = '"use client";\n' + chunk.code
        }
      }
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['src'], insertTypesEntry: true }),
    useClientDirective(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'NewhazeUI',
      fileName: 'newhaze-ui',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
})
