import { icons } from './icons'
import { configPatterns } from './patterns'
import { createIconMap } from './icon-map'

export const fileExtensions = createIconMap([
  ...configPatterns,
  {
    icon: icons.document.id,
    extensions: [
      'md',
      'markdown',
      'txt',
      'text',
      'rtf',
      'rst',
      'rtx',
      'info',
      'note',
      'doc',
      'docx',
      'odt',
      'pages',
      'pdf',
    ],
  },
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
  {
    icon: icons.audio.id,
    extensions: ['mp3', 'wav', 'm4a', 'flac', 'wma', 'aiff', 'aac'],
  },
  {
    icon: icons['3d'].id,
    extensions: ['blend', 'obj', 'fbx', 'dxf', 'mesh', 'gltf', 'glb', 'stl'],
  },
])
