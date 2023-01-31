/**
 * Function Declaration, Scopes...
 */

var someGlobalValue = "some global value";

function firstFunction() {
  var someGlobalValue = " a second value";
  console.log(someGlobalValue);
}

const arrow_function = () => {
  var someGlobalValue = " a third value";
  console.log(someGlobalValue);
};

firstFunction();
arrow_function();
