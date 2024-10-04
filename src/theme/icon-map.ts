interface IconMap {
  icon: string
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
  }

  return iconMap
}
