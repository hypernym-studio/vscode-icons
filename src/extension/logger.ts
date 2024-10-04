import { extensionTitle } from '@/utils'

export const logger = {
  info: (message: string) => `${extensionTitle} ${message}`,
  error: (message: string) => `${extensionTitle} ${message}`,
}
