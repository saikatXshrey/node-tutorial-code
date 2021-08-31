// CommonJS, every file is module(by default)
// Modules - Encapsulated Code (only share minimum)

const { monke, billi } = require('./4-names');
const sayHi = require('./5-utils');
require('./7-mind-grenade');
const data = require('./6-alternative-flavor');

console.log(data);

sayHi('babyyy❤️');
sayHi(monke);
sayHi(billi);