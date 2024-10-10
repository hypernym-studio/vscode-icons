import { icons } from './icons'
import { createIconMap } from './icon-map'

export const fileExtensions = createIconMap([
  {
    icon: icons.font.id,
    extensions: ['otf', 'ttf', 'woff', 'woff2', 'eot', 'font'],
  },
  {
    icon: icons.image.id,
    extensions: [
      'jpg',
      'jpeg',
      'png',
      'gif',
      'webp',
      'tif',
      'tiff',
      'ico',
      'icon',
      'svg',
      'eps',
      'psd',
      'avif',
      'dng',
      'exr',
      'img',
      'pic',
      'raw',
    ],
  },
  {
    icon: icons.video.id,
    extensions: [
      'mp4',
      'mpeg',
      'mpg',
      'qt',
      'mov',
      'wmv',
      'avi',
      'flv',
      'webm',
      'mkv',
      'gifv',
      'ogv',
      'ogg',
    ],
  },
])
