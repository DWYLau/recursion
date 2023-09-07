function fibonacciIterative(number) {
  let num1 = 0,
    num2 = 1,
    nextNum;
  let array = [];

  for (let i = 0; i < number; i++);
  {
    array.push(num1);
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
  }
  console.log(array);
}

function fibonacciRecursive(number) {
  if (number < 2) {
    return;
  }
  return fibonacciRecursive(number - 1) + fibonacciIterative(number - 2);
}
