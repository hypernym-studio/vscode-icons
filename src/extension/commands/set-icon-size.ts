import { setSize } from './set-size'

export async function setIconSize(): Promise<void> {
  return await setSize('icons.size')
}
