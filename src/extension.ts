import { writeFile } from 'node:fs/promises'
import { theme } from './theme/index.js'
import { paths } from './utils/index.js'

async function generateExtension() {
  return await writeFile(paths.extensionFile, theme)
}

generateExtension()
