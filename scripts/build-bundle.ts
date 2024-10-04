import { build } from 'esbuild'
import { config } from './esbuild.config'
import type { BuildOptions } from 'esbuild'

const isProduction = process.argv.includes('--production')

const options: BuildOptions = {
  ...config,
  entryPoints: ['./src/extension/index.ts'],
  minify: isProduction,
}

// VSCode API Documentation
// @link https://code.visualstudio.com/api/working-with-extensions/bundling-extension

async function buildBundle(): Promise<void> {
  await build(options)
}

buildBundle()
