import { copy } from '@hypernym/utils/fs'
import { paths } from '@/utils'

async function buildStaticDir(): Promise<void> {
  await copy(paths.dirStatic, paths.dirDist)
}

buildStaticDir()
