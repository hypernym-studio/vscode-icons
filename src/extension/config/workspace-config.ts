import { isNull, isStringEmpty } from '@hypernym/utils'
import { extensions, workspace } from 'vscode'
import { extensionName, extensionId } from '@/extension/meta'
import type { ExtensionConfig } from '@/types'

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

export function getWorkspaceConfig(): ExtensionConfig {
  const config: { [key: string]: any } = {}

  const workspaceConfig = workspace.getConfiguration(extensionName)
  const props = getPropertyNames()

  for (const prop of props) {
    config[prop] = workspaceConfig[prop]
  }

  return parseConfig(config)
}
