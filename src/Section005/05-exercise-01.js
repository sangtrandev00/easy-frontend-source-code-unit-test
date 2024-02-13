//

function getTicketPrice(age) {
  if (typeof age !== 'number') {
    return 'Your age is invalid';
  }

  if (age <= 0 || age > 120) {
    return 'Your age is invalid';
  }

  if (age < 6 || age >= 70) {
    return 0;
  }
  if (age >= 6 && age <= 12) {
    return 20000;
  }
  return 50000;
}

// console.log(getTicketPrice(23));

module.exports = getTicketPrice;
