import { setOpacity } from './set-opacity'

export async function setFolderOpacity(): Promise<void> {
  return await setOpacity('folders.opacity')
}
