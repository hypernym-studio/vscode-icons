import { workspace, window } from 'vscode'
import { registeredCommands } from './commands'
import { detectConfigChange } from './config/detect-config-change'
import { showMessage } from './messages'
import type { ExtensionContext } from 'vscode'

export async function activate(context: ExtensionContext): Promise<void> {
  try {
    context.subscriptions.push(...registeredCommands())

    await detectConfigChange(undefined, context)

    context.subscriptions.push(
      workspace.onDidChangeConfiguration(
        async (event) => await detectConfigChange(event, context),
      ),
    )

    const successMessage = showMessage('Activation succeeded!')
    window.showInformationMessage(successMessage)
  } catch {
    const errorMessage = showMessage(
      'Activation failed! Something went wrong, please try again.',
    )
    window.showErrorMessage(errorMessage)
  }
}

export function deactivate(): void {
  const successMessage = showMessage('Deactivation succeeded!')
  window.showInformationMessage(successMessage)
}
