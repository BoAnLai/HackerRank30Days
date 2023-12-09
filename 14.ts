'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on('end', function (): void {
  inputLines = inputString.split('\n');
  inputString = '';
  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

function main() {
  // Enter your code here
  let garbageData = readLine()
  let arr = readLine().split(' ').map(element => {
    let tmp = parseInt(element)
    return isNaN(tmp) ? 0 : tmp
  })

  class Difference {
    __elements: number[]

    constructor(arr: number[]) {
      this.__elements = arr
    }
    computeDifference() {
      let output
      let [max, min] = [0, 0]
      for (let i in this.__elements) {
        let tmp = this.__elements[i]
        if (parseInt(i) === 0) {
          max = this.__elements[i]
          min = max
        } else {
          if (tmp > max) {
            max = tmp
          } else if (tmp < min) {
            min = tmp
          }
        }
      }
      output = max - min
      return output
    }
  }
  console.log(new Difference(arr).computeDifference())
}