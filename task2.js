// 2 Чему будут равны переменные x и a в примере ниже? Написать почему так произошло
// (описать последовательность действий).
let a = 2;
// объявление переменной и присваивание
let x = 1 + (a *= 2);
// a = a * 2; a == 4; x = 1 + 4; x == 5;
console.log(x);
console.log(a);
