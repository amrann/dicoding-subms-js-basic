function fibonacci(n) {

  const arrFibonacci = [];

  for (let i = 0; i <= n; i++) {
    arrFibonacci.push(setFibonacci(i));
  };

  return arrFibonacci;
};

function setFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return setFibonacci(n - 1) + setFibonacci(n - 2);
};

// Jangan hapus kode di bawah ini!
export default fibonacci;
