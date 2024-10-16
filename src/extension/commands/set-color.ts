import { window } from 'vscode'
import { setThemeConfig } from '@/extension/config/theme-config'
import { isValidDefaultInput, validateColorInput } from './utils'
import type { InputBoxOptions } from 'vscode'

export async function setColor(section: string): Promise<void> {
  const input: InputBoxOptions = {
    placeHolder: 'Enter a valid HEX color, e.g. #fff, #ffffff, #ffffff66',
    ignoreFocusOut: true,
    validateInput: validateColorInput,
  }

  const value = await window.showInputBox(input)

  if (!value) return

  const val = isValidDefaultInput(value) ? undefined : value
  return setThemeConfig(section, val, true)
}
