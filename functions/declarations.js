const printer = (function () {
  let random = Math.random();
  return function printAnotherThing() {
    console.log(random);
  };
})();

printer();
