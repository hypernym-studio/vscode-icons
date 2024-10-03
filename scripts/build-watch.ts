import { context } from 'esbuild'
import { config } from './esbuild.config'
import type { BuildOptions } from 'esbuild'

const options: BuildOptions = {
  ...config,
  entryPoints: ['./src/extension/index.ts'],
  logLevel: 'info',
}

export async function buildWatch(): Promise<void> {
  try {
    const ctx = await context(options)
    await ctx.watch()
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

buildWatch()
