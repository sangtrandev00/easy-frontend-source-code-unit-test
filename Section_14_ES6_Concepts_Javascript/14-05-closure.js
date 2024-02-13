function counter(intiValue) {
  let value = intiValue;

  function descrease() {
    value--;
  }

  function increase() {
    value++;
  }

  function getValue() {
    console.log(value);
    return value;
  }

  //   function setValue(value) {
  //     this.value = value;
  //   }

  return {
    descrease: descrease,
    increase: increase,
    getValue: getValue,
    // setValue: setValue,
  };
}

const counter1 = counter(0);
counter1.increase();
counter1.increase();
counter1.getValue();

const counter2 = counter(10);
counter2.increase();
counter2.increase();
counter2.getValue();
// counter2
