export function isPangram(sentence: string) {
  const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97))

  return alphabet.every(letter => sentence.toLowerCase().includes(letter))
}
