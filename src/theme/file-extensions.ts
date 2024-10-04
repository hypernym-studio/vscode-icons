import { icons } from './icons'
import { createIconMap } from './icon-map'

export const fileExtensions = createIconMap([
  {
    icon: icons.html.id,
    extensions: ['html', 'vue', 'svelte', 'astro', 'jsx', 'tsx'],
  },
  {
    icon: icons.style.id,
    extensions: ['css', 'postcss', 'scss', 'sass', 'less', 'stylus'],
  },
  {
    icon: icons.image.id,
    extensions: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'tiff', 'ico', 'svg'],
  },
  {
    icon: icons.json.id,
    extensions: ['json'],
  },
  {
    icon: icons.font.id,
    extensions: ['otf', 'ttf', 'woff', 'woff2'],
  },
  {
    icon: icons.terminal.id,
    extensions: ['sh', 'bash', 'zsh'],
  },
])
