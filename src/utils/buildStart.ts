import { existsSync } from 'node:fs'
import { mkdir, rm, cp, writeFile } from 'node:fs/promises'
import fg from 'fast-glob'
import { paths } from './paths'
import type { ThemeDefinitions } from '../types'

const { dirHypernym, dirDist, dirPublic, definitionsSchema } = paths

async function createDirectories() {
  const options = { recursive: true }

  if (!existsSync(dirHypernym)) await mkdir(dirHypernym, options)
  if (!existsSync(dirDist)) {
    await mkdir(dirDist, options)
  } else {
    const files = await fg([`${dirDist}/**`], { onlyFiles: false, deep: 1 })
    for (const file of files) await rm(file, { recursive: true, force: true })
  }

  await cp(dirPublic, dirDist, options)
}

async function createIconDefinitions() {
  const definitionsData: ThemeDefinitions = {}
  const icons = await fg([`${dirPublic}/icons/*.svg`])

  for (const icon of icons) {
    const iconName = icon.split('/').pop()?.split('.')[0] as string

    definitionsData[`_${iconName}`] = {
      iconPath: `./icons/${iconName}.svg`
    }
  }

  await writeFile(definitionsSchema, JSON.stringify(definitionsData, null, 2))
}

async function run() {
  try {
    await createDirectories()
    await createIconDefinitions()
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

run()
