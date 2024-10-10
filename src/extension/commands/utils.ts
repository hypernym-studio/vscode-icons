export function isValidDefaultInput(input: string): boolean {
  const pattern = new RegExp(/default/, 'i')
  return input.length > 0 && pattern.test(input)
}
