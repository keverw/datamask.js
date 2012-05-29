var datamask = require('./datamask.js');

console.log(datamask.email('test@example.com'));

console.log(datamask.email('test@example.com', '#', 45, 80));

console.log(datamask.string('I\'m a string!', '*', 30));

console.log(datamask.domain('example.com', '*', 50));