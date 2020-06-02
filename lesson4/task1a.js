// 1.1
// Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который
// принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product
// должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%.

const Product = function (name, price) {
  this.name = name;
  this.price = price;
};

Product.prototype.make25PercentDiscount = function () {
  this.price = this.price * 0.75;
};

// Любопытный факт. ES6 функции при попытки создания объекта выдают
// TypeError: Product is not a constructor. Т.е. тело функции остается прежним,
// меняется только определение.
// Намекают, что или ES5 или классы + ES6 вместе.

const obj1 = new Product("milk", 100);
obj1.make25PercentDiscount();
console.log(obj1);

//es6

class NewProduct {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  make25PercentDiscount() {
    this.price = this.price * 0.75;
  }
}

const obj2 = new NewProduct("bread", 50);
obj2.make25PercentDiscount();
console.log(obj2);
