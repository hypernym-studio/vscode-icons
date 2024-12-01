import { icons } from './icons'
import { fonts } from './fonts'
import { createIconDefinitions } from './icon-definitions'
import { fileExtensions } from './file-extensions'
import { fileNames } from './file-names'
import type { IconTheme, ExtensionConfig } from '@/types'

// VSCode API Documentation
// @link https://code.visualstudio.com/api/extension-guides/file-icon-theme

export function createIconTheme(config: ExtensionConfig): IconTheme {
  const { hidesExplorerArrows } = config

  const iconDefinitions = createIconDefinitions(config)

  const customIconTheme: IconTheme = {
    hidesExplorerArrows,
    showLanguageModeIcons: false,
    iconDefinitions,
    fonts,
    file: icons.file.id,
    folder: icons.folder.id,
    folderExpanded: icons.folderOpen.id,
    fileExtensions,
    fileNames,
  }

  return customIconTheme
}
