// Kiem tra so chinh phuong

function isPerfectSquare(x) {
  let isValid = false;

  if (x <= 0) {
    return false;
  }

  if (Math.floor(x) == x && x > 3) {
    let i = 2;
    while (i < Math.sqrt(x)) {
      if (Math.sqrt(x) === Math.floor(Math.sqrt(x))) {
        isValid = true;
      }
      i++;
    }
  }

  return isValid;
}

let x = 49;

console.log(`Xem ${x} co phai la so chinh phuong hay khong? -> ` + isPerfectSquare(x));
