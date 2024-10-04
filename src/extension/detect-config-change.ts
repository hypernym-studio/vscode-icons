import { isNull, isStringEmpty } from '@hypernym/utils'
import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { isDeepStrictEqual } from 'node:util'
import { extensions, workspace } from 'vscode'
import { defaultConfig } from './default-config'
import { createIconTheme } from '@/theme'
import { extensionName, extensionId, extensionThemeFile } from '@/utils'
import type { ExtensionContext, ConfigurationChangeEvent } from 'vscode'
import type { ExtensionConfig } from '@/types'

function getGlobalConfig(
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

function getConfigProperties(): { [config: string]: unknown } {
  return extensions.getExtension(extensionId)?.packageJSON?.contributes
    ?.configuration?.properties
}

function getPropertyNames(): string[] {
  const names: Set<string> = new Set()
  const keys = Object.keys(getConfigProperties())

  for (const key of keys) {
    const splitKey = key.split('.')
    const k = splitKey[1]
    names.add(k)
  }

  return Array.from(names)
}

function parseConfig(config: any): ExtensionConfig {
  return JSON.parse(
    JSON.stringify(config, (k, v) => {
      if (isNull(v) || isStringEmpty(v)) return undefined
      else return v
    }),
  )
}

function getWorkspaceConfig(): ExtensionConfig {
  const config: { [key: string]: any } = {}

  const workspaceConfig = workspace.getConfiguration(extensionName)
  const props = getPropertyNames()

  for (const prop of props) {
    config[prop] = workspaceConfig[prop]
  }

  return parseConfig(config)
}

function syncGlobalConfig(
  config: ExtensionConfig,
  context: ExtensionContext,
): void {
  context.globalState.update('config', {
    version: context.extension.packageJSON.version,
    config,
  })
}

export async function detectConfigChange(
  event: ConfigurationChangeEvent | undefined,
  context: ExtensionContext,
): Promise<void> {
  if (event?.affectsConfiguration(extensionName) === false) return

  const globalConfig = getGlobalConfig(context)
  const workspaceConfig = getWorkspaceConfig()

  if (isDeepStrictEqual(globalConfig, workspaceConfig)) return

  const iconTheme = createIconTheme(workspaceConfig)
  const themeContent = JSON.stringify(iconTheme, null, 2)
  const themePath = resolve(__dirname, '..', extensionThemeFile)

  await writeFile(themePath, themeContent, 'utf-8')

  syncGlobalConfig(workspaceConfig, context)
}
