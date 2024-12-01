import type { FontDefinition } from '@/types'

export const fontId = 'hypernym-icons'

export const fonts: FontDefinition[] = [
  {
    id: fontId,
    src: [
      {
        path: `./${fontId}.woff`,
        format: 'woff',
      },
    ],
    weight: 'normal',
    style: 'normal',
    size: '120%',
  },
]
