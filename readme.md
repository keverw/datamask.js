[![build status](https://secure.travis-ci.org/keverw/datamask.js.png)](http://travis-ci.org/keverw/datamask.js)
# datamask.js #

A simple module to mask emails, domains and even regular strings!

## Setup ##
To set up datamask.js on your Node.js server use npm.

    npm install datamask  

## Example Usage ##

```
var datamask = require('datamask');

//email(address, mask_char, user_percent, domain_percent)
console.log(datamask.email('test@example.com')); //t**t@e****le.com

console.log(datamask.email('test@example.com', '#', 45, 80)); //t#st@e#####e.com

//string(value, mask_char, percent)
console.log(datamask.string('I\'m a string!', '*', 30)); //I'm a***ring

//domain(value, mask_char, percent)
console.log(datamask.domain('example.com', '*', 50)); //ex***le.com
```