const cipherEncode: { [key: string]: string} = {
  a: 'z',
  b: 'y',
  c: 'x',
  d: 'w',
  e: 'v',
  f: 'u',
  g: 't',
  h: 's',
  i: 'r',
  j: 'q',
  k: 'p',
  l: 'o',
  m: 'n',
  n: 'm',
  o: 'l',
  p: 'k',
  q: 'j',
  r: 'i',
  s: 'h',
  t: 'g',
  u: 'f',
  v: 'e',
  w: 'd',
  x: 'c',
  y: 'b',
  z: 'a'
}

const cipherDecode: { [key: string]: string} = {
  z: 'a',
  y: 'b',
  x: 'c',
  w: 'd',
  v: 'e',
  u: 'f',
  t: 'g',
  s: 'h',
  r: 'i',
  q: 'j',
  p: 'k',
  o: 'l',
  n: 'm',
  m: 'n',
  l: 'o',
  k: 'p',
  j: 'q',
  i: 'r',
  h: 's',
  g: 't',
  f: 'u',
  e: 'v',
  d: 'w',
  c: 'x',
  b: 'y',
  a: 'z'
}

export function encode(message: string): string {
 return sanitize(message).split('').map((char, index) => {
   const encodedChar = getNewChar(char)
   return ((index + 1) % 5 == 0) ? encodedChar + ' ' : encodedChar
  }).join('').trim()
}

export function decode(cipherText: string): string {
  return sanitize(cipherText).split('').map(char => getNewChar(char)).join('')
}

function sanitize(text: string): string {
  return text.toLowerCase().replace(/[^a-z\d]+/g, '')
}

function getNewChar(char: string): string {
  if ((/[a-z]/).test(char)) {
    char = cipherEncode[char]
  }

  return char
}
