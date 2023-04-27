import { readFileSync } from 'node:fs'
import { defaultNames } from './defaultNames'
import { fileExtensions } from './fileExtensions'
import { fileNames } from './fileNames'
import { transformData, paths } from '../utils'
import type { ThemeData } from '../types'

const iconDefinitions: ThemeData = JSON.parse(
  readFileSync(paths.definitionsSchema, 'utf-8')
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
      fileNames: transformData(fileNames, 'light')
    }
  },
  null,
  2
)
