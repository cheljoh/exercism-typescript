export function count(phrase: string): Map<string, number> {
  const matches = phrase.toLowerCase().match(/[\w\d]+('[A-Za-z]+)?/g)
  let counts = new Map()

  if (!matches) { return counts }

  for (let word of matches) {
    counts.set(word, (counts.get(word) ?? 0) + 1)
  }

  return counts
}