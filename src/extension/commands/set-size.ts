import { window } from 'vscode'
import { setThemeConfig } from '@/extension/config/theme-config'
import { isValidDefaultInput } from './utils'
import type { InputBoxOptions } from 'vscode'

export function isValidPercentSize(percent: string): boolean {
  const pattern = new RegExp(/^([0-9]{1}|[0-9]{2}|[0-9]{3})%$/)
  return percent.length > 0 && pattern.test(percent)
}

export function validatePercentInput(input: string): string | undefined {
  if (isValidDefaultInput(input)) return undefined
  else if (!isValidPercentSize(input)) return 'Invalid percentage size'
  return undefined
}

export async function setSize(section: string): Promise<void> {
  const input: InputBoxOptions = {
    placeHolder: 'Enter a percentage size',
    ignoreFocusOut: true,
    validateInput: validatePercentInput,
  }

  const value = await window.showInputBox(input)

  if (!value) return

  const val = isValidDefaultInput(value) ? undefined : value
  return setThemeConfig(section, val, true)
}
