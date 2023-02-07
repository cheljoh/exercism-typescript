class Transcriptor {
  private static readonly sequence: { [key: string]: string } = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  }

  toRna(dna: string): string {
    return dna
      .split("")
      .map(letter => {
        if (!Object.keys(Transcriptor.sequence).includes(letter)) {
          throw 'Invalid input DNA.'
        }
        return Transcriptor.sequence[letter]
      })
      .join("")
  }
}

export default Transcriptor
