import { window } from 'vscode'
import { setThemeConfig } from '@/extension/config/theme-config'
import { isValidDefaultInput, validateOpacityInput } from './utils'
import type { InputBoxOptions } from 'vscode'

export async function setOpacity(section: string): Promise<void> {
  const input: InputBoxOptions = {
    placeHolder: 'Enter a percentage size, e.g. 60%',
    ignoreFocusOut: true,
    validateInput: validateOpacityInput,
  }

  const value = await window.showInputBox(input)

  if (!value) return

  const val = isValidDefaultInput(value) ? undefined : value
  return setThemeConfig(section, val, true)
}
