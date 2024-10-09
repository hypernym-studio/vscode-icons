interface IconMap {
  icon: string
  pattern?: string
  extensions?: string[]
  names?: string[]
}

export function createIconMap(maps: IconMap[]): Record<string, string> {
  const iconMap: Record<string, string> = {}

  for (const map of maps) {
    if (map.extensions) {
      for (const ext of map.extensions) iconMap[ext] = map.icon
    }

    if (map.names) {
      for (const name of map.names) iconMap[name] = map.icon
    }

    if (map.pattern) {
      const { pattern } = map
      const patternSplit = pattern.split('.')
      const patternExt = patternSplit.pop()
      const ext = patternExt?.match(/\{([^)]+)\}/)

      if (ext) {
        const name = patternSplit.join('.')
        const splitExt = ext[1].split(',')

        for (const e of splitExt) iconMap[`${name}.${e}`] = map.icon
      } else iconMap[pattern] = map.icon
    }
  }

  return iconMap
}
