import { icons } from './icons'
import { createIconMap } from './icon-map'

export const fileNames = createIconMap([
  {
    icon: icons.config.id,
    pattern: 'eslint.config.{js,mjs,cjs,ts,mts,cts}',
  },
  {
    icon: icons.config.id,
    pattern: 'prettier.config.{js,mjs,cjs,ts,mts,cts}',
  },
  {
    icon: icons.config.id,
    pattern: 'stylelint.config.{js,mjs,cjs,ts,mts,cts}',
  },
  {
    icon: icons.config.id,
    pattern: 'vite.config.{js,mjs,cjs,ts,mts,cts}',
  },
  {
    icon: icons.config.id,
    pattern: 'vitest.config.{js,mjs,cjs,ts,mts,cts}',
  },
  {
    icon: icons.config.id,
    pattern: 'postcss.config.{js,mjs,cjs,ts,mts,cts}',
  },
  {
    icon: icons.config.id,
    pattern: 'rollup.config.{js,mjs,cjs,ts,mts,cts}',
  },
  {
    icon: icons.config.id,
    pattern: 'rolldown.config.{js,mjs,cjs,ts,mts,cts}',
  },
  {
    icon: icons.config.id,
    pattern: 'bundler.config.{js,mjs,cjs,ts,mts,cts}',
  },
  {
    icon: icons.config.id,
    pattern: 'hypernym.config.{js,mjs,cjs,ts,mts,cts}',
  },
  {
    icon: icons.config.id,
    pattern: 'hyper.config.{js,mjs,cjs,ts,mts,cts}',
  },
  {
    icon: icons.config.id,
    pattern: 'webpack.config.{js,mjs,cjs,ts,mts,cts}',
  },
  {
    icon: icons.config.id,
    pattern: 'webpack.mix.{js,mjs,cjs,ts,mts,cts}',
  },
  {
    icon: icons.config.id,
    pattern: 'rspack.config.{js,mjs,cjs,ts,mts,cts}',
  },
  {
    icon: icons.config.id,
    pattern: 'rsbuild.config.{js,mjs,cjs,ts,mts,cts}',
  },
  {
    icon: icons.config.id,
    pattern: 'next.config.{js,mjs,cjs,ts,mts,cts}',
    names: ['turbo.json'],
  },
  {
    icon: icons.config.id,
    pattern: 'nuxt.config.{js,mjs,cjs,ts,mts,cts}',
  },
  {
    icon: icons.config.id,
    pattern: 'nitro.config.{js,mjs,cjs,ts,mts,cts}',
  },
  {
    icon: icons.config.id,
    pattern: 'vue.config.{js,mjs,cjs,ts,mts,cts}',
  },
  {
    icon: icons.config.id,
    pattern: 'svelte.config.{js,mjs,cjs,ts,mts,cts}',
  },
  {
    icon: icons.config.id,
    pattern: 'tailwind.config.{js,mjs,cjs,ts,mts,cts}',
  },
  {
    icon: icons.config.id,
    pattern: 'astro.config.{js,mjs,cjs,ts,mts,cts}',
  },
  {
    icon: icons.config.id,
    pattern: 'babel.config.{js,mjs,cjs,ts,mts,cts,json}',
  },
  {
    icon: icons.config.id,
    pattern: 'mdsvex.config.{js,mjs,cjs,ts,mts,cts}',
  },
  {
    icon: icons.config.id,
    pattern: 'playwright.config.{js,mjs,cjs,ts,mts,cts}',
  },
  {
    icon: icons.config.id,
    pattern: 'playwright-ct.config.{js,mjs,cjs,ts,mts,cts}',
  },
  {
    icon: icons.config.id,
    names: ['renovate.json'],
  },
  {
    icon: icons.dot.id,
    names: ['.renovaterc', '.renovaterc.json'],
  },
  {
    icon: icons.dot.id,
    names: [
      '.eslint',
      '.eslintrc',
      '.eslintignore',
      '.eslintrc.js',
      '.eslintrc.cjs',
    ],
  },
  {
    icon: icons.dot.id,
    pattern: '.prettierrc.{js,cjs}',
    names: ['.prettier', '.prettierrc', '.prettierignore'],
  },
  {
    icon: icons.dot.id,
    pattern: '.stylelintrc.{js,cjs}',
    names: ['.stylelint', '.stylelintrc', '.stylelintignore'],
  },
  {
    icon: icons.dot.id,
    pattern: '.pnpmfile.{js,cjs}',
  },
  {
    icon: icons.dot.id,
    names: ['.hypernym', '.hypernymrc', '.hypernymconfig'],
  },
  {
    icon: icons.dot.id,
    names: ['.hyper', '.hyperrc', '.hyperconfig'],
  },
  {
    icon: icons.dot.id,
    names: [
      '.git',
      '.gitignore',
      '.gitkeep',
      '.gitpreserve',
      '.gitinclude',
      '.gitmessage',
      '.gitconfig',
      '.gitmodules',
      '.gitattributes',
      '.editorconfig',
      '.vscodeignore',
      '.keep',
    ],
  },
  {
    icon: icons.dot.id,
    names: [
      '.npmrc',
      '.vuerc',
      '.nuxtrc',
      '.nextrc',
      '.swcrc',
      '.babelrc',
      '.parcelrc',
    ],
  },
  {
    icon: icons.dot.id,
    names: [
      '.env',
      '.env.test',
      '.env.example',
      '.env.template',
      '.env.local',
      '.env.dev',
      '.env.development',
      '.env.alpha',
      '.env.beta',
      '.env.prod',
      '.env.production',
      '.env.preview',
    ],
  },
  {
    icon: icons.copyright.id,
    pattern: 'license.{txt,md,rst}',
    names: ['license'],
  },
  {
    icon: icons.copyright.id,
    pattern: 'licence.{txt,md,rst}',
    names: ['licence'],
  },
  {
    icon: icons.copyright.id,
    pattern: 'copyright.{txt,md,rst}',
    names: ['copyright'],
  },
])
