import { read, write } from '@hypernym/utils/fs'
import fg from 'fast-glob'
import { paths } from '@/utils'

async function fileHandler(file: string, color: string): Promise<void> {
  const input = await read(file)
  const transform = input.replace(/fill=".*?"/, `fill="${color}"`)

  return await write(file, transform)
}

export async function replaceFill(
  theme: 'dark' | 'light',
  color: string,
): Promise<void> {
  try {
    const svgFiles = await fg([`${paths.dirPublic}/icons/*_${theme}.svg`])

    for (const file of svgFiles) await fileHandler(file, color)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

// replaceFill('dark', '#ffffff86')
