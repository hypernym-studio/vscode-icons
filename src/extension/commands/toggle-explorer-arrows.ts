import { window } from 'vscode'
import { setThemeConfig } from '@/extension/config/theme-config'
import type { QuickPickItem } from 'vscode'

export async function toggleExplorerArrows(): Promise<void> {
  const disable: QuickPickItem = {
    description: 'Disable Arrows (Default)',
    detail: 'Hide folder arrows in Explorer',
    label: '$(close)',
  }
  const enable: QuickPickItem = {
    description: 'Enable Arrows',
    detail: 'Show folder arrows in Explorer',
    label: '$(check)',
  }

  const value = await window.showQuickPick([disable, enable], {
    placeHolder: 'Toggle folder arrows in Explorer',
    canPickMany: false,
    ignoreFocusOut: false,
    matchOnDescription: true,
  })

  if (!value?.description) return

  if (value.description === enable.description) {
    return setThemeConfig('hidesExplorerArrows', false, true)
  }

  if (value.description === disable.description) {
    return setThemeConfig('hidesExplorerArrows', true, true)
  }

  return
}
