import { write } from '@hypernym/utils/fs'
import { theme } from './theme/index.js'
import { paths } from './utils/index.js'

async function generateExtension() {
  return await write(paths.extensionFile, theme)
}

generateExtension()
