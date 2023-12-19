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
  let T:number = parseInt(readLine())
  let num:number
  for(let i = 0;i<T;i++){
    num = parseInt(readLine())
    testPrime(num)
  }

  function testPrime(num:number):void{
    if(num===1){
      console.log('Not prime')
      return
    }

    for(let i = 2;i<num;i++){
      if(num%i === 0){
        console.log('Not prime')
        return
      
      }
    }
  console.log('Prime')
  }
}