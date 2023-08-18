export function hey(message: string): string {
  const trimmedMessage = message.trim()
  const onlyAlphasMessage = message.replace(/[^a-zA-Z]+/, '')

  if (isAllCapitalized(onlyAlphasMessage) && isQuestion(trimmedMessage)) {
    return "Calm down, I know what I'm doing!"
  } else if (isAllCapitalized(onlyAlphasMessage)) {
    return 'Whoa, chill out!'
  } else if (isQuestion(trimmedMessage)) {
    return 'Sure.'
  } else if (trimmedMessage.length == 0) {
    return 'Fine. Be that way!'
  } else {
    return 'Whatever.'
  }
}

function isAllCapitalized(message: string): boolean {
  return message.length > 0 && message == message.toUpperCase()
}

function isQuestion(message: string): boolean {
  return message.endsWith('?')
}
