function calcAreaOfRectangle(a, b) {
  if (a <= 0 || b <= 0) {
    return -1;
  }

  return a * b;
}

console.log('Area of Rectangle has a = 3, b = 4 is: ' + calcAreaOfRectangle(3, 4));

function calcAreaOfPerimeterOfRectangle(a, b, h) {
  if (a <= 0 || b <= 0) {
    return -1;
  }

  return ((a + b) * h) / 2;
}

console.log(
  'Area of Rectangle Perimeter has a = 3, b = 4, h = 5 is:' +
    calcAreaOfPerimeterOfRectangle(3, 4, 5)
);

function calcAreaOfCircle(r) {
  if (r <= 0) {
    return -1;
  }

  return Math.PI * Math.pow(r, 2);
}

console.log('Area of Circle has r = 2 is:' + calcAreaOfCircle(5));
