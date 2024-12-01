import { window } from 'vscode'
import { setThemeConfig } from '@/extension/config/theme-config'
import { isValidDefaultInput, validateSizeInput } from './utils'
import type { InputBoxOptions } from 'vscode'

export async function setSize(section: string): Promise<void> {
  const input: InputBoxOptions = {
    placeHolder: 'Enter a percentage size, e.g. 130%',
    ignoreFocusOut: true,
    validateInput: validateSizeInput,
  }

  const value = await window.showInputBox(input)

  if (!value) return

  const val = isValidDefaultInput(value) ? undefined : value
  return setThemeConfig(section, val, true)
}
