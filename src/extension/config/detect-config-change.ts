import { resolve } from 'node:path'
import { isDeepStrictEqual } from 'node:util'
import { writeFile } from 'node:fs/promises'
import { createIconTheme } from '@/theme'
import { extensionName, extensionThemeFile } from '@/extension/meta'
import { getGlobalConfig, syncGlobalConfig } from './global-config'
import { getWorkspaceConfig } from './workspace-config'
import type { ExtensionContext, ConfigurationChangeEvent } from 'vscode'

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
