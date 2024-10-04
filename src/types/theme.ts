import type { FontDefinition, IconDefinitions } from './definitions'

export interface IconTheme {
  hidesExplorerArrows: boolean
  showLanguageModeIcons: boolean
  iconDefinitions: IconDefinitions
  fonts: FontDefinition[]
  file: string
  folder: string
  folderExpanded: string
  fileExtensions: Record<string, string>
  fileNames: Record<string, string>
}
