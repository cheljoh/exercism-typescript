const perform: { [key: string]: (a: number, b: number) => number } = {
  plus: (a, b) => a + b,
  minus: (a, b) => a - b,
  "multiplied by": (a, b) => a * b,
  "divided by": (a, b) => a / b
}

const illegalOperations = ["cubed", "squared", "power"]

function compute(value1: number, value2: number, operation: string): number {
  let total = value1
  if (!Number.isNaN(value2) && operation) {
    total = perform[operation](value1, value2)
  }

  return total
}

export const answer = (question: string): number|string => {
  const regex = /^What is (-?\d+)(?: (plus|minus|multiplied by|divided by) (-?\d+)(?: (plus|minus|multiplied by|divided by) (-?\d+))?)?\?$/
  const match = question.match(regex)

  if (match == null) {
    if (question.split(" ")[0] !== "What" || illegalOperations.some(operation => question.includes(operation))) {
      throw new Error("Unknown operation")
    }
    throw new Error("Syntax error")
  }

  let total = 0

  total = compute(parseInt(match[1]), parseInt(match[3]), match[2])
  total = compute(total, parseInt(match[5]), match[4])

  return total
}