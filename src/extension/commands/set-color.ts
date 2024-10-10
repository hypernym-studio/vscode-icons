import { window } from 'vscode'
import { setThemeConfig } from '@/extension/config/theme-config'
import { isValidDefaultInput } from './utils'
import type { InputBoxOptions } from 'vscode'

export function isValidHEXColor(color: string): boolean {
  const pattern = new RegExp(
    /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})(?:([0-9]{2})?)$/,
  )
  return color.length > 0 && pattern.test(color)
}

export function validateColorInput(input: string): string | undefined {
  if (isValidDefaultInput(input)) return undefined
  else if (!isValidHEXColor(input)) return 'Invalid HEX color'
  return undefined
}

export async function setColor(section: string): Promise<void> {
  const input: InputBoxOptions = {
    placeHolder: 'Enter a valid HEX color',
    ignoreFocusOut: true,
    validateInput: validateColorInput,
  }

  const value = await window.showInputBox(input)

  if (!value) return

  const val = isValidDefaultInput(value) ? undefined : value
  return setThemeConfig(section, val, true)
}
