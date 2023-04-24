import { readFile, writeFile } from 'node:fs/promises'
import fg from 'fast-glob'
import { paths } from '../src/utils'

async function fileHandler(file: string, color: string) {
  const input = await readFile(file, 'utf8')
  const transform = input.replace(/fill=".*?"/, `fill="${color}"`)

  await writeFile(file, transform)
}

export async function replaceFill(theme: 'dark' | 'light', color: string) {
  try {
    const svgFiles = await fg([`${paths.dirPublic}/icons/*_${theme}.svg`])

    for (const file of svgFiles) await fileHandler(file, color)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

// replaceFill('dark', '#ffffff86')
