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
  function removeDuplicates(arr: any) {
    return arr.filter((item: any, index: any) => arr.indexOf(item) === index);
  }
  class Print {
    arr: any = [];
    constructor(array: []) {
      this.arr = array;
    }
    printArray() {
      this.arr.forEach((item: any) => {
        console.log(item);
      });
    }
  }
  inputLines.shift()
  let array = removeDuplicates(inputLines);
  let obj = new Print(array);
  obj.printArray();
}