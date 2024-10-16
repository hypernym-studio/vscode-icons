import type { BuildOptions } from 'esbuild'

export const config: BuildOptions = {
  outExtension: { '.js': '.cjs' },
  outdir: './dist',
  outbase: './src',
  platform: 'node',
  format: 'cjs',
  external: ['vscode'],
  bundle: true,
}
