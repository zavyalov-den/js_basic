// 1.2
// Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
// а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства
// объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать
// его в свойство text объекта.

const Post = function (author, text = "", date = new Date()) {
  this.author = author;
  this.text = text;
  this.date = date;
};

Post.prototype.edit = function (text) {
  this.text = text;
};

const post1 = new Post("Vasiliy", "some text");
post1.edit("some other text");
console.log(post1);

//es6

class NewPost {
  constructor(author, text = "", date = new Date()) {
    this.author = author;
    this.text = text;
    this.date = date;
  }
  edit(text) {
    this.text = text;
  }
}

const post2 = new NewPost("Vasiliy", "some text");
post2.edit("some other text");
console.log(post2);

// б) конструктор AttachedPost, который принимает параметры author, text, date.
// Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. Также
// в конструкторе AttachedPost должно создаваться свойство highlighted со значением false.
// Унаследуйте в объектах типа AttachedPost методы из Post.
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать
// свойству highlighted значение true.

const AttachedPost = function (author, text = "", date = new Date()) {
  Post.call(this, author, text, date);
  this.highlighted = false;
};

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
  this.highlighted = true;
};

const post3 = new AttachedPost("Vasiliy");
post3.edit("new text");
post3.makeTextHighlighted();

console.log(post3);

//es6

class newAttachedPost extends NewPost {
  constructor(author, text = "", date = new Date()) {
    super(author, text, date);
    this.highlighted = false;
  }

  makeTextHighlighted() {
    this.highlighted = true;
  }
}

const post4 = new newAttachedPost("Vasiliy");
post4.edit("new text 4");
post4.makeTextHighlighted();
console.log(post4);
