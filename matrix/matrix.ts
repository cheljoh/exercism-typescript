export class Matrix {
  _rows: number[][]
  _columns: number[][]


  constructor(matrix: string) {
    this._rows = matrix.split('\n').map((string) => string.split(' ')).map((array) => array.map((number) => parseInt(number)))
    
    let columns: number[][] = []
    for (let i = 0; i < this._rows.length; i++) {
      columns[i] = this._rows.map((array) => array[i])
    }
    this._columns = columns
  }

  get rows(): number[][] {
    return this._rows
  }

  get columns(): number[][] {
    return this._columns
  }
}
