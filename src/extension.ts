import { writeFile } from 'node:fs/promises'
import { theme } from './theme'
import { paths } from './utils'

async function generateExtension() {
  await writeFile(paths.extensionFile, theme)
}

generateExtension()
