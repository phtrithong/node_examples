const faker = require('faker');

let number = faker.random.number();
console.log(`number: ${number}`);

let uuid = faker.random.uuid();
console.log(`uuid: ${uuid}`);

let word = faker.random.word();
console.log(`word: ${word}`);

let words = faker.random.words(6);
console.log(`words: ${words}`);