import { workspace, window } from 'vscode'
import { detectConfigChange } from './detect-config-change'
import { logger } from './logger'
import type { ExtensionContext } from 'vscode'

export async function activate(context: ExtensionContext): Promise<void> {
  const version = context.extension.packageJSON.version

  try {
    await detectConfigChange(undefined, context)

    context.subscriptions.push(
      workspace.onDidChangeConfiguration(
        async (event) => await detectConfigChange(event, context),
      ),
    )

    const successMessage = logger.info(`(${version}): Activation succeeded!`)
    window.showInformationMessage(successMessage)
  } catch {
    const errorMessage = logger.error(
      `(${version}): Activation failed! Something went wrong, please try again.`,
    )
    window.showErrorMessage(errorMessage)
  }
}

export function deactivate(context: ExtensionContext): void {
  const version = context.extension.packageJSON.version

  const successMessage = logger.info(`(${version}): Deactivation succeeded!`)
  window.showInformationMessage(successMessage)
}
