import { icons } from './icons'
import { createIconMap } from './icon-map'

export const fileNames = createIconMap([
  {
    icon: icons.document.id,
    names: ['license', 'licence', 'copyright'],
  },
])
