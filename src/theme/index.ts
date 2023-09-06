import { defaultNames } from './default-names.js'
import { fileExtensions } from './file-extensions.js'
import { fileNames } from './file-names.js'
import { transformData, paths } from '../utils/index.js'
import type { ThemeData } from '../types/index.js'

const { default: iconDefinitions }: ThemeData = await import(
  paths.definitionsSchema
)

export const theme = JSON.stringify(
  {
    hidesExplorerArrows: true,
    iconDefinitions,
    ...transformData(defaultNames, 'dark'),
    fileExtensions: transformData(fileExtensions, 'dark'),
    fileNames: transformData(fileNames, 'dark'),
    light: {
      ...transformData(defaultNames, 'light'),
      fileExtensions: transformData(fileExtensions, 'light'),
      fileNames: transformData(fileNames, 'light'),
    },
  },
  null,
  2,
)
