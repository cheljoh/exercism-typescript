interface Roster {
  [grade: number]: string[]
}

export class GradeSchool {
  _roster: Roster

  constructor() {
    this._roster = {}
  }

  roster() {
    return this.newRoster()
  }

  add(name: string, grade: number) {
    this.checkForDups(name)
    
    if (this._roster[grade] == undefined) {
      this._roster[grade] = [name]
    } else {
      this._roster[grade].push(name)
      this._roster[grade].sort()
    }
  }

  grade(grade: number) {
    return this._roster[grade] == undefined ? [] : this.newRoster()[grade]
  }

  private newRoster(): Roster {
    const newRoster: Roster = {}
    for (const grade in this._roster) {
      newRoster[grade] = [...this._roster[grade]]
    }

    return newRoster
  }

  private checkForDups(name: string) {
    for (const grade in this._roster) {
      if (this._roster[grade].includes(name)) {
        const index = this._roster[grade].indexOf(name)
        this._roster[grade].splice(index, 1)
      } 
    }
  }
}