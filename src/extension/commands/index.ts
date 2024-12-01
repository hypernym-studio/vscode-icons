import { commands } from 'vscode'
import { extensionName } from '@/extension/meta'
import { toggleExplorerArrows } from './toggle-explorer-arrows'
import { setFolderColor } from './set-folder-color'
import { setFolderOpacity } from './set-folder-opacity'
import { setFolderSize } from './set-folder-size'
import { setIconColor } from './set-icon-color'
import { setIconOpacity } from './set-icon-opacity'
import { setIconSize } from './set-icon-size'
import type { Disposable } from 'vscode'

type ExtensionCommands = {
  [commmand: string]: () => Promise<void>
}

const extensionCommands: ExtensionCommands = {
  toggleExplorerArrows,
  setFolderColor,
  setFolderOpacity,
  setFolderSize,
  setIconColor,
  setIconOpacity,
  setIconSize,
}

export function registeredCommands(): Disposable[] {
  return Object.keys(extensionCommands).map((commandName) => {
    const cmd = `${extensionName}.${commandName}`
    const callCommand = () => extensionCommands[commandName]()

    return commands.registerCommand(cmd, callCommand)
  })
}
