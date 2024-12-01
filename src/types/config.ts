export interface ExtensionConfig {
  /**
   * Specifies the visibility of the explorer arrows.
   *
   * @default true
   */
  hidesExplorerArrows: boolean
  /**
   * Folders options.
   */
  folders: {
    /**
     * Specifies a custom color for folder icons.
     *
     * Accepts valid HEX color format.
     *
     * @default undefined
     */
    color?: string
    /**
     * Specifies a custom opacity for folder icons.
     *
     * Accepts a percentage size format.
     *
     * @default undefined
     */
    opacity?: string
    /**
     * Specifies a custom size for folder icons.
     *
     * Accepts a percentage size format.
     *
     * @default undefined
     */
    size?: string
  }
  /**
   * Icons options.
   */
  icons: {
    /**
     * Specifies a custom color for all icons.
     *
     * Accepts valid HEX color format.
     *
     * @default undefined
     */
    color?: string
    /**
     * Specifies a custom opacity for all icons.
     *
     * Accepts a percentage size format.
     *
     * @default undefined
     */
    opacity?: string
    /**
     * Specifies a custom size for all icons.
     *
     * Accepts a percentage size format.
     *
     * @default undefined
     */
    size?: string
  }
}
