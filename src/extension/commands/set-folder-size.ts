import { setSize } from './set-size'

export async function setFolderSize(): Promise<void> {
  return await setSize('folders.size')
}
