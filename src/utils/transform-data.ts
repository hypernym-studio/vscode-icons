import type { ThemeData } from '../types/index.js'

export function transformData(data: ThemeData, theme: string) {
  const transformedData: ThemeData = {}

  for (const [key, value] of Object.entries(data))
    transformedData[key] = `_${value}_${theme}`

  return transformedData
}
