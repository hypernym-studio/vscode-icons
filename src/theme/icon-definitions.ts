import { icons } from './icons'
import { fontId } from './fonts'
import type { ExtensionConfig, IconDefinitions } from '@/types'

export function createIconDefinitions(
  config: ExtensionConfig,
): IconDefinitions {
  const iconDefinitions: IconDefinitions = {}

  for (const [key, value] of Object.entries(icons)) {
    const k = value.id

    iconDefinitions[k] = {
      fontId,
      fontCharacter: value.char,
    }

    if (config.icons?.color) {
      iconDefinitions[k]['fontColor'] = config.icons.color
    }

    if (config.icons?.size) {
      iconDefinitions[k]['fontSize'] = config.icons.size
    }

    if (config.folders?.color && key.includes('folder')) {
      iconDefinitions[k]['fontColor'] = config.folders.color
    }

    if (config.folders?.size && key.includes('folder')) {
      iconDefinitions[k]['fontSize'] = config.folders.size
    }
  }

  return iconDefinitions
}
