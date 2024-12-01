import { write } from '@hypernym/utils/fs'
import { paths } from '@/utils'
import { createIconTheme } from '@/theme'
import { defaultConfig } from '@/extension/config'

async function buildTheme(): Promise<void> {
  const config = defaultConfig()
  const theme = createIconTheme(config)
  const json = JSON.stringify(theme, null, 2)
  await write(paths.file.theme, json)
}

buildTheme()
