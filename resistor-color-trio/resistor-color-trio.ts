const colorToValue: {[key: string]: string} = {
  black: '0',
  brown: '1',
  red: '2',
  orange: '3',
  yellow: '4',
  green: '5',
  blue: '6',
  violet: '7',
  grey: '8',
  white: '9',
}

export function decodedResistorValue(colors: string[]): string {
  let [value1, value2, value3] = colors
  let raw = parseInt(colorToValue[value1] + colorToValue[value2]) * 10**parseInt(colorToValue[value3])
  

  return raw >= 1000 ? (raw / 1000) + ' kiloohms' : raw + ' ohms'
}
