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

  let n: number = parseInt(readLine())
  let root: number = parseInt(readLine())
  let maxPath: number = 0

  interface Bst {
    value: number;
    left: undefined | Node;
    right: undefined | Node;
  }

  class Node implements Bst {
    value: number;
    left: undefined | Node;
    right: undefined | Node;
    height: number;

    constructor(num: number, h: number = 0) {
      this.value = num
      this.left = undefined
      this.right = undefined
      this.height = h
    };

    insert(num: number) {
      if (num > this.value) {
        if (this.right === undefined) {
          let height = this.height + 1
          if (height > maxPath) {
            maxPath = height
          }
          this.right = new Node(num, height)
        } else {
          this.right.insert(num)
        }
      } else if (num < this.value) {
        if (this.left === undefined) {
          let height = this.height + 1
          if (height > maxPath) {
            maxPath = height
          }
          this.left = new Node(num, height)
        } else {
          this.left.insert(num)
        }
      }
    }
  }

  let rootObj: Node
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      rootObj = new Node(root)
    } else {
      rootObj.insert(parseInt(readLine()))
    }
  }

  function getHeight() {
    return maxPath
  }

  console.log(getHeight())
}