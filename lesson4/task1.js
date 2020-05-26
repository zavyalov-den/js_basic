// 1 Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
// 	мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
// - единицы (в свойстве units)
// - десятки (в свойстве tens)
// - сотни (в свойстве hundereds)
// Например, для числа 45 мы должны получить следующий объект:
// {
// 	units: 5, //это единицы
// 		tens: 4, //это десятки
// 		hundreds: 0, //это сотни
// }
// Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
// 	необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

const numToObj = (num, obj = {}) => {
  if (!Number.isInteger(num) || num < 0 || num > 999) {
    console.log(
      "An error occurred. Parameter should be an integer within [0:999] range."
    );
    return obj;
  } else {
    if (num < 10) {
      obj.units = num;
    } else if (num < 100) {
      obj.tens = num;
      numToObj(Math.floor(num / 10), obj);
    } else {
      obj.hundreds = num;
      numToObj(Math.floor(num / 10), obj);
    }
    return obj;
  }
};

//Посмотрел подсказку и сделал наоборот :P
//Решил вместо цикла сделать через рекурсию и лишний раз не выводить разряды, которых нет.

console.log(numToObj(9));
console.log(numToObj(89));
console.log(numToObj(289));
console.log(numToObj("asdf"));
