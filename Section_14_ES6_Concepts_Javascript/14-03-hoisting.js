//

var tip = 100;

(function () {
  //   var tip = 19999;
  console.log('I have $' + husband());

  function wife() {
    return tip * 2;
  }

  function husband() {
    return wife() / 2;
  }

  var tip = 10;
})();
