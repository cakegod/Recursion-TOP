function fibs(n: number) {
  const fibArr: number[] = []
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

function fibsRec(n: number, arr: number[] = [0, 1]): number[] {
  if (n === 1) return arr
  return fibsRec(n - 1, [...arr, arr[arr.length - 1] + arr[arr.length - 2]])
}

console.log(fibsRec(6))