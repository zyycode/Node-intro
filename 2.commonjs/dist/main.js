(() => {
  var __webpack_modules__ = {
    './lib.js': (module, exports) => {
      console.log('hello commonjs');

      exports.hello = 'world';

      exports.add = function (a, b) {
        return a + b;
      };

      exports.obj = { hello: 'world' };

      module.exports = function minus(a, b) {
        return a - b;
      };

      module.exports.additional = 'exports';
    }
  };
  // The module cache
  var __webpack_module_cache__ = {};

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create a new module (and put it into the cache)
    var module = (__webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {}
    });

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }
  var __webpack_exports__ = {};
  (() => {
    const lib = __webpack_require__('./lib.js');
    console.log(lib);
  })();
})();
