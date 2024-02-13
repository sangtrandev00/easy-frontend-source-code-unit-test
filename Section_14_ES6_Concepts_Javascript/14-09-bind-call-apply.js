'use strict';

function sayHello(a, b) {
  console.log(this.name, a + b);
}

const student = {
  name: 'Tran nhat sang',
};

// three methods of using bind.
sayHello.call(student, 3, 5);
sayHello.apply(student, [3, 2]);
const newSayHello = sayHello.bind(student);
newSayHello(1111, 12);
