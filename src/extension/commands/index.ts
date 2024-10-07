import { commands } from 'vscode'
import { extensionName } from '@/extension/meta'
import { toggleExplorerArrows } from './toggle-explorer-arrows'
import { setFolderColor } from './set-folder-color'
import { setFolderSize } from './set-folder-size'
import { setIconColor } from './set-icon-color'
import { setIconSize } from './set-icon-size'
import type { Disposable } from 'vscode'

type ExtensionCommands = {
  [commmand: string]: () => Promise<void>
}

const extensionCommands: ExtensionCommands = {
  toggleExplorerArrows,
  setFolderColor,
  setFolderSize,
  setIconColor,
  setIconSize,
}

export function registeredCommands(): Disposable[] {
  return Object.keys(extensionCommands).map((commandName) => {
    const cmd = `${extensionName}.${commandName}`
    const callCommand = () => extensionCommands[commandName]()

    return commands.registerCommand(cmd, callCommand)
  })
}
