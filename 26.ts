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

  let actual: number[] = readLine().split(' ').map((elem) => parseInt(elem))
  let expected:number[] = readLine().split(' ').map((elem)=>parseInt(elem))


  console.log(((expected:number[],actual:number[])=>{
    if(
      expected[2]>actual[2]||
      ((expected[2]===actual[2])&&(expected[1]>actual[1]))||
      ((expected[2] === actual[2]) && (expected[1] === actual[1]) && (expected[0]>=actual[0]))
    ){
      return 0

    }else{

      if (actual[2]>expected[2]){
        return 10000
      } else if ((actual[2] === expected[2])&&(actual[1]>expected[1])){
        return (actual[1]-expected[1])*500
      } else if ((actual[2] === expected[2]) && (actual[1] === expected[1]) && (actual[0] > expected[0])){
        return (actual[0] - expected[0]) * 15
      }
    }
  })(expected,actual))

}