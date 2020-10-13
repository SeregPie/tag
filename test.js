let assert = require('assert').strict;

let tag = require('./');

let renderTemplate = tag`Hi, ${'name'}!`;
let string = renderTemplate({name: 'Patrik'});

assert.equal(string, 'Hi, Patrik!');