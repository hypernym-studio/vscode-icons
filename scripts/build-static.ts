import { copy } from '@hypernym/utils/fs'
import { paths } from '@/utils'

async function buildStaticDir(): Promise<void> {
  await copy(paths.dir.static, paths.dir.dist)
}

buildStaticDir()
