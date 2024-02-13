export function getDisplayedAddress(address) {
  if (Object.is(address, {})) {
    return '';
  }

  const valuesArr = Object.values(address);
  let finalArr = [];
  let firstNumAdress = '';
  valuesArr.forEach((value) => {
    if (typeof value !== 'number') {
      finalArr.push(value);
    } else {
      firstNumAdress = value + ' ';
    }
  });

  const remainStringAdress = finalArr.join(', ');
  return firstNumAdress + remainStringAdress;
}

// console.log(
//   getDisplayedAddress({
//     number: 123,
//     street: 'Nguyen Cong Tru',
//     ward: 'Ward 11',
//     district: 'Binh Thanh District',
//     city: 'HCMC',
//   })
// );

// console.log(
//   getDisplayedAddress({
//     street: 'Nguyen Cong Tru',
//     district: 'Binh Thanh District',
//   })
// );
