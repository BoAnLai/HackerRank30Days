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
    data: number;
    left: undefined | Node;
    right: undefined | Node;
  }

  class Node implements Bst {
    data: number;
    left: undefined | Node;
    right: undefined | Node;
    height: number;

    constructor(num: number, h: number = 0) {
      this.data = num
      this.left = undefined
      this.right = undefined
      this.height = h
    };

    insert(num: number) {
      if (num > this.data) {
        if (this.right === undefined) {
          let height = this.height + 1
          if (height > maxPath) {
            maxPath = height
          }
          this.right = new Node(num, height)
        } else {
          this.right.insert(num)
        }
      } else if (num < this.data) {
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

  levelOrder(rootObj)
  function levelOrder(rootNode: Node): void {
    let depot: number[][] = []
    // let pointer:Node = node
    traverseNode(rootNode)
    function traverseNode(pointer: Node): void {
      if (pointer) {
        if (!depot[pointer.height]) {
          depot[pointer.height] = []
        }
        depot[pointer.height].push(pointer.data)
        traverseNode(pointer.left)
        traverseNode(pointer.right)
      } else {
        return
      }
    }
    let output = ''
    for (let arr of depot) {
      arr.sort((a, b) => a - b)
      arr.forEach(elem => output = output + elem + ' ')
    }
    console.log(output)
  }
}