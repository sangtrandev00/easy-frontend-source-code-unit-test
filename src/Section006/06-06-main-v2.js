function randomNumberFromAtoB(a, b) {
  if (a <= 0 || a >= b || b <= 0) {
    return -1;
  }

  return Math.round(Math.random() * (b - a) + a);
}

module.exports = randomNumberFromAtoB;
