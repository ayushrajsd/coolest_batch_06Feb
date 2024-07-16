function calculateFibonacci(number) {
  if (number <= 1) {
    return number;
  } else {
    return calculateFibonacci(number - 1) + calculateFibonacci(number - 2);
  }
}
process.on("message", ({ number }) => {
  const result = calculateFibonacci(number);
  process.send(result);
});
