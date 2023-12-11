'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}



function main() {
  const S = readLine();
  // try{
  //   let int = parseInt(S)
  //   if(typeof(int) === number && !(Number.isNaN(int))){
  //     console.log(parseInt(S))
  //   }else{
  //     throw new Error(`Can't be parsed into number`)
  //   }
  // } catch {
  //   console.log('Bad String')
  // }

  let int = parseInt(S)
  console.log(int !== int ? 'Bad String' : int)
  //because HackerRank system issue, there is some hidden rule and restriction for javascript
}
