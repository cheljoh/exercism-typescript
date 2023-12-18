export function find(haystack: number[], needle: number): number {
  return search(haystack, needle, 0, haystack.length)
}

function search(numbers: number[], needle: number, start: number, end: number): number {
  let portion = [...numbers.slice(start, end)]
  let middleIndex = Math.floor((start + end) / 2)

  if (numbers[middleIndex] === needle) {
    return middleIndex
  } else if (portion.length <= 1) {
    throw Error('Value not in array')
  }

  if (needle > numbers[middleIndex]) {
    start = middleIndex
    end = middleIndex + Math.round(portion.length / 2)
  } else {
    end = middleIndex
    const lowerBound = Math.round(portion.length / 2)
    start = middleIndex - lowerBound < 0 ? 0 : middleIndex - lowerBound
  }

  return search(numbers, needle, start, end)
}