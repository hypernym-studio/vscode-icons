import { icons } from './icons'
import type { IconMap } from './icon-map'

const configExts = 'js,mjs,cjs,ts,mts,cts,json,yml,yaml,toml'

export const configPatterns: IconMap[] = [
  {
    icon: icons.config.id,
    pattern: `conf.{${configExts}}`,
  },
  {
    icon: icons.config.id,
    pattern: `cnfg.{${configExts}}`,
  },
  {
    icon: icons.config.id,
    pattern: `config.{${configExts}}`,
  },
  {
    icon: icons.config.id,
    pattern: `configuration.{${configExts}}`,
  },
  {
    icon: icons.config.id,
    pattern: `settings.{${configExts}}`,
  },
  {
    icon: icons.config.id,
    pattern: `options.{${configExts}}`,
  },
]
