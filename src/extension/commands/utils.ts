export function isValidDefaultInput(input: string): boolean {
  const pattern = new RegExp(/default/, 'i')
  return input.length > 0 && pattern.test(input)
}

function isValidHEXColor(color: string): boolean {
  const pattern = new RegExp(
    /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})(?:([0-9]{2})?)$/,
  )
  return color.length > 0 && pattern.test(color)
}

export function validateColorInput(input: string): string | undefined {
  if (isValidDefaultInput(input)) return undefined
  else if (!isValidHEXColor(input)) return 'Invalid HEX color.'
  return undefined
}

function isValidPercentSize(percent: string): boolean {
  const pattern = new RegExp(/^([0-9]{1}|[0-9]{2}|[0-9]{3})%$/)
  return percent.length > 0 && pattern.test(percent)
}

export function validateSizeInput(input: string): string | undefined {
  if (isValidDefaultInput(input)) return undefined
  else if (!isValidPercentSize(input)) return 'Invalid percentage size.'
  return undefined
}

function isValidPercentOpacity(percent: string): boolean {
  const pattern = new RegExp(/^([0-9][0-9]?|^100)%$/)
  return percent.length > 0 && pattern.test(percent)
}

export function validateOpacityInput(input: string): string | undefined {
  if (isValidDefaultInput(input)) return undefined
  else if (!isValidPercentOpacity(input)) {
    return 'Invalid percentage size. Accepts values from 0-100%.'
  }
  return undefined
}
