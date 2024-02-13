function createCounter(label = 'default') {
  // your code here
  const map = {};
  function count(label = 'default') {
    map[label] = map[label] ? map[label] + 1 : 1;
    return `${label}: ${map[label]}`;
  }

  function resetCount(label = 'default') {
    map[label] = 0;
  }
  return {
    count,
    resetCount,
  };
}

const counter = createCounter();

console.log(counter.count());
console.log(counter.count());
console.log(counter.count());
counter.resetCount();
console.log(counter.count());
counter.resetCount();
console.log(counter.count('easy'));
console.log(counter.count('easy'));
console.log(counter.count('easy'));
counter.resetCount('easy');
console.log(counter.count('easy'));
