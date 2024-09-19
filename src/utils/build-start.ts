import { parse } from 'node:path'
import { exists, write, copy, mkdir, remove } from '@hypernym/utils/fs'
import fg from 'fast-glob'
import { paths } from './paths'
import type { ThemeDefinitions } from '@/types'

const { dirHypernym, dirDist, dirPublic, definitionsSchema } = paths

async function createDirectories(): Promise<void> {
  if (!(await exists(dirHypernym))) await mkdir(dirHypernym)
  if (!(await exists(dirDist))) await mkdir(dirDist)
  else {
    const files = await fg([`${dirDist}/**`], { onlyFiles: false, deep: 1 })
    for (const file of files) {
      await remove(file, { recursive: true, force: true })
    }
  }
  return await copy(dirPublic, dirDist)
}

async function createIconDefinitions(): Promise<void> {
  const definitionsData: ThemeDefinitions = {}
  const icons = await fg([`${dirPublic}/icons/*.svg`])

  for (const icon of icons) {
    const iconName = parse(icon).name

    definitionsData[`_${iconName}`] = {
      iconPath: `./icons/${iconName}.svg`,
    }
  }

  return await write(
    definitionsSchema,
    `export default ${JSON.stringify(definitionsData, null, 2)}`,
  )
}

async function run(): Promise<void> {
  try {
    await createDirectories()
    await createIconDefinitions()
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

run()
