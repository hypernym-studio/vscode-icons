import { setColor } from './set-color'

export async function setIconColor(): Promise<void> {
  return await setColor('icons.color')
}
