import { icons } from './icons'
import { configPatterns } from './patterns'
import { createIconMap } from './icon-map'

export const fileNames = createIconMap([
  ...configPatterns,
  {
    icon: icons.document.id,
    names: ['license', 'licence', 'copyright'],
  },
])
