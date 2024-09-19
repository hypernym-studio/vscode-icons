import { defaultNames } from './default-names'
import { fileExtensions } from './file-extensions'
import { fileNames } from './file-names'
import { transformData, paths } from '@/utils'
import type { ThemeData } from '@/types'

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
