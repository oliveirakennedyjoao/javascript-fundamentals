if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}

console.log(x);

function foo() {
  const name = "some text goes here";
  let counter = 0;
  return function print_something() {
    console.log(counter);
    counter++;
  };
}

const execution = foo();
execution();
const execution2 = foo();
execution2();
const execution3 = foo();
execution3();
