import { icons } from './icons'
import { fontId } from './fonts'
import type { ExtensionConfig, IconDefinitions } from '@/types'

export function createIconDefinitions(
  config: ExtensionConfig,
): IconDefinitions {
  const iconDefinitions: IconDefinitions = {}

  for (const [key, value] of Object.entries(icons)) {
    const k = value.id
    const isFolder = key.includes('folder')

    iconDefinitions[k] = {
      fontId,
      fontCharacter: value.char,
    }

    if (isFolder) {
      if (config.folders?.color || config.folders.opacity) {
        iconDefinitions[k]['fontColor'] =
          `color-mix(in srgb, ${config.folders.color || 'currentColor'} ${config.folders.opacity || '100%'}, transparent)`
      }

      if (config.folders?.size) {
        iconDefinitions[k]['fontSize'] = config.folders.size
      }
    } else {
      if (config.icons?.color || config.icons.opacity) {
        iconDefinitions[k]['fontColor'] =
          `color-mix(in srgb, ${config.icons.color || 'currentColor'} ${config.icons.opacity || '100%'}, transparent)`
      }

      if (config.icons?.size) {
        iconDefinitions[k]['fontSize'] = config.icons.size
      }
    }
  }

  return iconDefinitions
}
