import { fileURLToPath } from 'node:url'

const dirRoot = fileURLToPath(new URL('../../', import.meta.url))
const dirHypernym = `${dirRoot}.hypernym`
const dirDist = `${dirRoot}dist`
const dirSrc = `${dirRoot}src`
const dirPublic = `${dirSrc}/public`
const definitionsSchema = `${dirHypernym}/definitions.json`
const extensionFile = `${dirDist}/extension.json`

export const paths = {
  dirRoot,
  dirHypernym,
  dirDist,
  dirSrc,
  dirPublic,
  definitionsSchema,
  extensionFile
}
