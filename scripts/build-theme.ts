import { write } from '@hypernym/utils/fs'
import { paths } from '@/utils'
import { createIconTheme } from '@/theme'

async function buildTheme(): Promise<void> {
  const theme = createIconTheme()
  const json = JSON.stringify(theme, null, 2)
  await write(paths.themeFile, json)
}

buildTheme()
