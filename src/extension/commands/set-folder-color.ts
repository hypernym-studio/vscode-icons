import { setColor } from './set-color'

export async function setFolderColor(): Promise<void> {
  return await setColor('folders.color')
}
