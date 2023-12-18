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
  let n:number = parseInt(readLine())
  let root: number = parseInt(readLine())

  class Node{
    data:number
    next:Node|undefined

    constructor(data:number){
      this.data = data
      this.next = undefined
    }

    insert(data:number){
      if(this.next){
        this.next.insert(data)
      }else{
        this.next = new Node(data)
      }
    }
  }

  let rootObj: Node|undefined
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      rootObj = new Node(root)
    } else {
      rootObj.insert(parseInt(readLine()))
    }
  }
  rootObj = removeDuplicates(rootObj)
  let output:string = ''
  while(!(rootObj===undefined)){
    output = output + rootObj.data + ' '
    rootObj = rootObj.next
  }
  console.log(output)

  function removeDuplicates(pointer:Node):Node{
    let head:Node = pointer
    let arr:number[] = []
    let lastNode:Node
    while(!(pointer===undefined)){
      if(arr.length<0){
        arr.push(pointer.data)
        lastNode = pointer
        pointer = pointer.next
      }else{
        if(arr.includes(pointer.data)){
          lastNode.next =pointer.next
          pointer = pointer.next
        }else{
          arr.push(pointer.data)
          lastNode = pointer
          pointer = pointer.next
        }
      }
    }
    return head
  }
}