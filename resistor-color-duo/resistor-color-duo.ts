export class ResistorColor {
  private colors: string[]
  private allColors: {[key: string]: string}

  constructor(colors: string[]) {
    if (colors.length <2) {
      throw new Error("At least two colors need to be present")
    }

    this.colors = colors;
    this.allColors = {
      black: "0",
      brown: "1",
      red: "2",
      orange: "3",
      yellow: "4",
      green: "5",
      blue: "6",
      violet: "7",
      grey: "8",
      white: "9",
    }

  }

  value()  {
    return Number(this.colors
      .slice(0, 2)
      .map((color) => this.allColors[color])
      .join("")
    )
  }
}
