import fs from 'fs';

export class CsvFileReader {
  data: string[][] = []; // array of arrays => matchData is an array

  constructor(public filename: string) {}

  read() {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string) => {
        return row.split(',');
      });
  }
}
