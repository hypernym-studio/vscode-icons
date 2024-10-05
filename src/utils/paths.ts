import { cwd } from 'node:process'
import { resolve } from 'node:path'
import { extensionThemeFile } from '@/extension/meta'

const dirRoot = cwd()

export const paths = {
  dir: {
    root: dirRoot,
    dist: resolve(dirRoot, 'dist'),
    static: resolve(dirRoot, 'static'),
    icons: resolve(dirRoot, 'icons'),
    src: resolve(dirRoot, 'src'),
  },
  file: {
    theme: resolve(dirRoot, 'dist', extensionThemeFile),
  },
}
