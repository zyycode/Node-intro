// console.log('start require');
// require('./lib');
// console.log('end require');

const lib = require('./lib');
console.log(lib);
lib.additional = 'exports';

// webpack --devtool=inline-source-map --mode=development --target=node ./index.js
