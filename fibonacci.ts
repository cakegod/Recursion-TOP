function fibs(n: number) {
  const fibArr = [] as number[]
  let fibOne = 1;
  let fibTwo = 1;
  let fib = fibOne + fibTwo
  for (let i = 0; i <= n; i++) {

    if (i === 0) {
      fibArr.push(0)
    } else if (i === 1 || i === 2) {
      fibArr.push(1)
    } else {
      fibArr.push(fib)
      fibTwo = fibOne;
      fibOne = fib;
      fib = fibOne + fibTwo;
    }

  }

  return fibArr

}

console.log(fibs(6));

// function fibsRec(n: number): number[] {
//
// }