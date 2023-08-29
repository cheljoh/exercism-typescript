export class Robot {
  static names: string[];
  _name: string

  constructor() {
    Robot.names = [];
    this._name = ''
  }

  public get name(): string {
    if (this._name.length == 0) {
      let noNameSet = true
      while (noNameSet) {
        const name = `${Robot.getLetter()}${Robot.getLetter()}${Robot.getNumber()}${Robot.getNumber()}${Robot.getNumber()}`
        if (!Robot.names.includes(name)) {
          Robot.names.push(name)
          this._name = name
          noNameSet = false
        }
      }
     
    }

    return this._name
  }

  public resetName(): void {
    this._name = ''
  }

  public static releaseNames(): string[] {
    return this.names;
  }

  private static getLetter(): string {
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return alpha[Math.ceil(Math.random() * alpha.length - 1)]
  }

  private static getNumber(): string {
    return Math.floor(Math.random() * 10).toString()
  }
}
