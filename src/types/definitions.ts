export interface IconDefinition {
  fontCharacter: string
  fontId: string
  fontColor?: string
  fontSize?: string
}

export interface IconDefinitions {
  [key: string]: IconDefinition
}

export interface FontDefinition {
  id: string
  src: {
    path: string
    format: string
  }[]
  weight?: string
  style?: string
  size?: string
}
