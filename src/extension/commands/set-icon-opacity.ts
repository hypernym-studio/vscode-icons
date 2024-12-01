import { setOpacity } from './set-opacity'

export async function setIconOpacity(): Promise<void> {
  return await setOpacity('icons.opacity')
}
