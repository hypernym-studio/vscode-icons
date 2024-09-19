import type { ThemeData } from '@/types'

export function transformData(data: ThemeData, theme: string): ThemeData {
  const transformedData: ThemeData = {}

  for (const [key, value] of Object.entries(data))
    transformedData[key] = `_${value}_${theme}`

  return transformedData
}
