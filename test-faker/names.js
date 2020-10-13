const faker = require('faker');

let firstName = faker.name.firstName();
let lastName = faker.name.lastName();

let prefix = faker.name.prefix(); 
let suffix = faker.name.suffix();

let jobTitle = faker.name.jobTitle();
let jobArea = faker.name.jobArea();

let phone = faker.phone.phoneNumber();

console.log(`Employee: ${prefix} ${firstName} ${lastName} ${suffix}`);
console.log(`Job title: ${jobTitle}`);
console.log(`Job area: ${jobArea}`);
console.log(`Phone: ${phone}`);