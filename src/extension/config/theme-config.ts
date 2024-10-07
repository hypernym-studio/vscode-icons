import { workspace } from 'vscode'
import { extensionName } from '@/extension/meta'

export function setThemeConfig(
  section: string,
  value: unknown,
  target = false,
): void {
  const config = workspace.getConfiguration(extensionName)
  config.update(section, value, target)
}
