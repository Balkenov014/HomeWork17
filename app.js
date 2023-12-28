const library = {
  "Мона Лиза": {
    name: "Мона Лиза",
    author: "Леонардо да Винчи",
    genre: "живопись",
    year: 1503,
    find: function () {
      console.log(`Название: ${this.name}`);
      console.log(`Автор: ${this.author}`);
      console.log(`Жанр: ${this.genre}`);
      console.log(`Год: ${this.year}`);
    }
  },
  "Тайная вечеря": {
    name: "Тайная вечеря",
    author: "Леонардо да Винчи",
    genre: "живопись",
    year: 1495,
    find: function () {
      console.log(`Название: ${this.name}`);
      console.log(`Автор: ${this.author}`);
      console.log(`Жанр: ${this.genre}`);
      console.log(`Год: ${this.year}`);
    }
  },
};

library["Мона Лиза"].find();
library["Тайная вечеря"].find();