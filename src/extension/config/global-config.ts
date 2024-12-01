import { defaultConfig } from './default-config'
import type { ExtensionContext } from 'vscode'
import type { ExtensionConfig } from '@/types'

export function getGlobalConfig(
  context: ExtensionContext,
): ExtensionConfig | undefined {
  const extVersion = context.extension.packageJSON.version

  const globalState = context.globalState.get<{
    version: string
    config: ExtensionConfig
  }>('config')

  if (extVersion === globalState?.version) return globalState?.config
  else return defaultConfig()
}

export function syncGlobalConfig(
  config: ExtensionConfig,
  context: ExtensionContext,
): void {
  context.globalState.update('config', {
    version: context.extension.packageJSON.version,
    config,
  })
}
