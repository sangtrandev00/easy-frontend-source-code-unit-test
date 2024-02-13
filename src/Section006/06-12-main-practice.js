function getTaxiCount(passengersCount) {
  // your code here
  let carSeven = 0;
  let carFour = 0;
  let passengersReminder;
  if (passengersCount <= 4) {
    return 1;
  }

  if (passengersCount > 4) {
    passengersReminder = passengersCount % 7;
    carSeven = Math.trunc(passengersCount / 7);
    if (passengersReminder > 4) {
      carSeven += 1;
    } else {
      carFour += 1;
    }
  }

  return carSeven + carFour;
}

function getTaxiCount(passengersCount) {
  // your code here
  let carSeven;
  let passengersReminder;
  passengersReminder = passengersCount % 7;
  carSeven = Math.trunc(passengersCount / 7);
  if (passengersReminder > 0) {
    return carSeven + 1;
  } else {
    return carSeven;
  }
}

console.log(getTaxiCount(3));
console.log(getTaxiCount(6));
console.log(getTaxiCount(10));
console.log(getTaxiCount(20));
