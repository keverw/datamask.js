var datamask = require('./datamask.js');

console.log(datamask.email('test@example.com'));

console.log(datamask.email('test@example.com', '#', 45, 80));