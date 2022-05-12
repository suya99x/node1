//every file is a module
//const {john,peter} = require('./3-names')
const names = require('./3-names')
const sayHi =require('./4-utils')
const data =require('./5-alternative-flavor')

sayHi(john);
sayHi(names.john)
sayHi(names.peter)
sayHi('susan')