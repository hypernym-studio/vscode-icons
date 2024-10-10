import { extensionTitle, extensionVersion } from '@/extension/meta'

export function showMessage(message: string): string {
  return `${extensionTitle} (${extensionVersion}): ${message}`
}
