import { icons } from './icons'
import { configPatterns } from './patterns'
import { createIconMap } from './icon-map'

export const fileNames = createIconMap([
  ...configPatterns,
  {
    icon: icons.document.id,
    names: ['license', 'licence', 'copyright'],
  },
  {
    icon: icons.hidden.id,
    names: [
      '.git',
      '.gitignore',
      '.gitattributes',
      '.gitmodules',
      '.gitmessage',
      '.gitconfig',
      '.gitkeep',
      '.gitinclude',
      '.gitpreserve',
      '.keep',
    ],
  },
  {
    icon: icons.hidden.id,
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
    icon: icons.hidden.id,
    names: ['.editorconfig', '.vscodeignore'],
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
    names: ['.renovaterc', '.renovaterc.json'],
  },
  {
    icon: icons.hidden.id,
    pattern: '.eslintrc.{js,mjs,cjs}',
    names: ['.eslint', '.eslintrc', '.eslintignore'],
  },
  {
    icon: icons.hidden.id,
    pattern: '.prettierrc.{js,mjs,cjs}',
    names: ['.prettier', '.prettierrc', '.prettierignore'],
  },
  {
    icon: icons.hidden.id,
    pattern: '.stylelintrc.{js,mjs,cjs}',
    names: ['.stylelint', '.stylelintrc', '.stylelintignore'],
  },
  {
    icon: icons.hidden.id,
    pattern: '.pnpmfile.{js,mjs,cjs}',
  },
  {
    icon: icons.hidden.id,
    names: ['.hypernym', '.hypernymrc', '.hypernymconfig'],
  },
  {
    icon: icons.hidden.id,
    names: ['.hyper', '.hyperrc', '.hyperconfig'],
  },
])
