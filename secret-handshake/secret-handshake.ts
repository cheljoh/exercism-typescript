const handshake: { [position: number]: string } = {
  1: "wink",
  2: "double blink",
  3: "close your eyes",
  4: "jump"
}

export function commands(number: number): string[] {
  const binary = (number).toString(2)
  let commands = []

  for (let i = 1; i <= Object.keys(handshake).length; i++) {
    if (binary.at(-i) === '1') {
      commands.push(handshake[i])
    }
  }

  return (binary.at(-5) === '1') ? commands.reverse() : commands
}
