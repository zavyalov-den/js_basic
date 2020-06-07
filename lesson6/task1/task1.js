// Решение не смотрел, решил сделать сам. Смотрю на результат - хочется переделать =)

// По остальной домашке отпишусь здесь же:
// Собрался делать 2 оставшихся задания - смотрю, слайдер нужно скачать готоый, а корзина вместо исходников
// лежит уже полностью готовая. Хорошо хоть размялся на ХО =)
// Надеюсь, что использование метода addEventListener я усвоил.

const app = {
  table: document.querySelector("#game"),
  turn: "X",
  start() {
    this.drawTable();
    this.createClickHandler();
  },
  drawTable() {
    for (let row = 0; row < 3; row++) {
      const tr = document.createElement("tr");
      this.table.appendChild(tr);
      for (let col = 0; col < 3; col++) {
        const td = document.createElement("td");
        td.id = `${row}${col}`;
        this.table.appendChild(td);
      }
    }
  },
  nextTurn() {
    app.turn = app.turn === "X" ? "O" : "X";
  },
  mark(e) {
    if (e.target.innerText !== "") {
      return;
    }
    e.target.innerText = app.turn;
    app.checkWinCondition();
    app.nextTurn();
  },
  createClickHandler() {
    for (const cell of this.table.querySelectorAll("td")) {
      cell.addEventListener("click", this.mark);
    }
  },
  checkWinCondition() {
    let result;
    if (app.statement(app.cell("00"), app.cell("01"), app.cell("02"))) {
      app.winMsg();
    } else if (app.statement(app.cell("10"), app.cell("11"), app.cell("12"))) {
      app.winMsg();
    } else if (app.statement(app.cell("20"), app.cell("21"), app.cell("22"))) {
      app.winMsg();
    } else if (app.statement(app.cell("00"), app.cell("10"), app.cell("20"))) {
      app.winMsg();
    } else if (app.statement(app.cell("01"), app.cell("11"), app.cell("21"))) {
      app.winMsg();
    } else if (app.statement(app.cell("02"), app.cell("12"), app.cell("22"))) {
      app.winMsg();
    } else if (app.statement(app.cell("00"), app.cell("11"), app.cell("22"))) {
      app.winMsg();
    } else if (app.statement(app.cell("02"), app.cell("11"), app.cell("20"))) {
      app.winMsg();
    }
  },
  statement(c1, c2, c3) {
    if (c1 + c2 + c3 === "XXX" || c1 + c2 + c3 === "OOO") {
      return true;
    } else return false;
  },
  cell(id) {
    const cell = document.getElementById(id);
    return cell.innerText;
  },
  winMsg() {
    alert(`${app.turn} WON!!!`);
    location.reload();
  },
};

app.start();
