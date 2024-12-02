import { workspace } from 'vscode'
import { registeredCommands } from './commands'
import { detectConfigChange } from './config/detect-config-change'
import type { ExtensionContext } from 'vscode'

export async function activate(context: ExtensionContext): Promise<void> {
  context.subscriptions.push(...registeredCommands())

  await detectConfigChange(undefined, context)

  context.subscriptions.push(
    workspace.onDidChangeConfiguration(
      async (event) => await detectConfigChange(event, context),
    ),
  )
}

export function deactivate(): void {}
