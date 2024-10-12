<p align="center">
  <img src="https://raw.githubusercontent.com/hypernym-studio/vscode-icons/main/media/cover.gif" alt="Hypernym Icons Cover" />
</p>

<h1 align="center">Hypernym Icons</h1>

<p align="center">An ultra-minimalistic VSCode icon set for modern devs.</p>

<p align="center">
  <a href="https://github.com/hypernym-studio/vscode-icons">Repository</a>
  <span>✦</span>
  <a href="https://github.com/hypernym-studio/vscode-icons/releases">Releases</a>
  <span>✦</span>
  <a href="https://github.com/hypernym-studio/vscode-icons/discussions">Discussions</a>
  <span>✦</span>
  <a href="https://marketplace.visualstudio.com/items?itemName=hypernym-studio.hypernym-icons">Marketplace</a>
</p>

<p align="center">
  <strong>Hypernym Studio</strong>
</p>

<br>

## Features

- Adds minimalistic modern style
- Dynamically infers colors based on state
- Allows additional customization via options
- Provides special commands

## Installation

### Marketplace

Install [Hypernym Icons](https://marketplace.visualstudio.com/items?itemName=hypernym-studio.hypernym-icons) extension from the official VSCode Marketplace.

### Manual

If necessary, the extension can be installed manually (optional).

1. Download the [latest version](https://github.com/hypernym-studio/vscode-icons/releases/latest) of the extension.
2. Open the **Command Palette** dropdown (**⇧⌘P**).
   - Run the `Extensions: Install from VSIX` command.
   - Select previously downloaded `.vsix` extension file.
3. After installation, simply activate the extension.

<sub>Read the official VSCode <a href="https://code.visualstudio.com/docs/editor/extension-marketplace#_install-from-a-vsix">guide</a> to learn more about manual installation.</sub>

## Options

Extension provides a configuration system that allows additional customization such as changing the color, opacity and size of icons.

All options are optional and will fall back to defaults if not specified.

<sub>See the official VSCode <a href="https://code.visualstudio.com/docs/getstarted/settings">settings</a> section for more info.</sub>

### Explorer Arrows

- Type: `boolean`
- Default: `true`

Specifies the visibility of the Explorer arrows.

```ts
// settings.json

{
  "hypernym-icons.hidesExplorerArrows": true
}
```

### Folder Color

- Type: `string`
- Default: `undefined`

Specifies a custom color for folder icons. Accepts valid HEX color format.

```ts
// settings.json

{
  "hypernym-icons.folders.color": "#fff"
}
```

### Folder Size

- Type: `string`
- Default: `undefined`

Specifies a custom size for folder icons. Accepts a percentage size format.

```ts
// settings.json

{
  "hypernym-icons.folders.size": "130%"
}
```

### Icon Color

- Type: `string`
- Default: `undefined`

Specifies a custom color for all icons. Accepts valid HEX color format.

```ts
// settings.json

{
  "hypernym-icons.icons.color": "#fff"
}
```

### Icon Size

- Type: `string`
- Default: `undefined`

Specifies a custom size for all icons. Accepts a percentage size format.

```ts
// settings.json

{
  "hypernym-icons.icons.size": "130%"
}
```

## Commands

Extension includes a set of specific `commands` that can simplify customization.

1. Open the **Command Palette** dropdown (**⇧⌘P**).
2. Type `Hypernym Icons` to see a list of all available commands.
3. Run the selected command.

<sub>See the official VSCode <a href="https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette">commands</a> section for more info.</sub>

### Toggle Explorer Arrows

- Command: `Hypernym Icons: Toggle Explorer Arrows`

Specifies the visibility of the explorer arrows.

### Set Folder Color

- Command: `Hypernym Icons: Set Folder Color`

Specifies a custom color for folder icons. Accepts valid HEX color format.

### Set Folder Size

- Command: `Hypernym Icons: Set Folder Size`

Specifies a custom size for folder icons. Accepts a percentage size format.

### Set Icon Color

- Command: `Hypernym Icons: Set Icon Color`

Specifies a custom color for all icons. Accepts valid HEX color format.

### Set Icon Size

- Command: `Hypernym Icons: Set Icon Size`

Specifies a custom size for all icons. Accepts a percentage size format.

### Reset Command

It is also possible to reset settings via commands if they are input type. Simply select a command, type `default` and run it. This will reset the option to its default value.

## Community

Feel free to ask questions or share new ideas.

Use the official [discussions](https://github.com/hypernym-studio/vscode-icons/discussions) to get involved.

## License

Developed in 🇭🇷 Croatia, © Hypernym Studio.

Released under the [Apache-2.0](https://raw.githubusercontent.com/hypernym-studio/vscode-icons/main/LICENSE.txt) license.
