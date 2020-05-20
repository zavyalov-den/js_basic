// Случайно выполнил задание в task4.js
const myCalc = (a, b, sign) => {
  switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "An error occurred";
  }
};
