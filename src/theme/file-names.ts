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
    names: ['renovate.json'],
  },
  {
    icon: icons.hidden.id,
    names: ['.renovaterc', '.renovaterc.json'],
  },
  {
    icon: icons.hidden.id,
    names: [
      '.eslint',
      '.eslintrc',
      '.eslintignore',
      '.eslintrc.js',
      '.eslintrc.cjs',
    ],
  },
  {
    icon: icons.hidden.id,
    pattern: '.prettierrc.{js,cjs}',
    names: ['.prettier', '.prettierrc', '.prettierignore'],
  },
  {
    icon: icons.hidden.id,
    pattern: '.stylelintrc.{js,cjs}',
    names: ['.stylelint', '.stylelintrc', '.stylelintignore'],
  },
  {
    icon: icons.hidden.id,
    pattern: '.pnpmfile.{js,cjs}',
  },
  {
    icon: icons.hidden.id,
    names: ['.hypernym', '.hypernymrc', '.hypernymconfig'],
  },
  {
    icon: icons.hidden.id,
    names: ['.hyper', '.hyperrc', '.hyperconfig'],
  },
  {
    icon: icons.hidden.id,
    names: [
      '.editorconfig',
      '.gitignore',
      '.gitkeep',
      '.vscodeignore',
      '.gitattributes',
    ],
  },
  {
    icon: icons.hidden.id,
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
    icon: icons.hidden.id,
    names: [
      '.env',
      '.env.test',
      '.env.example',
      '.env.development',
      '.env.production',
    ],
  },
  {
    icon: icons.verified.id,
    names: ['codeowners'],
  },
  {
    icon: icons.info.id,
    pattern: 'readme.{md,txt}',
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
])
