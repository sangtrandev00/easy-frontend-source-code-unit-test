function errorCodeV1(err) {
  if (typeof err !== 'string') {
    return undefined;
  }

  let message;
  switch (err) {
    case 'E01':
      message = 'Invalid username or password';
      break;
    case 'E02':
      message = 'Missing data';
      break;
    case 'E03':
      message = 'Too many attempts';
      break;
    default:
      message = 'Something went wrong';
  }
  return message;
}
// comment this console.log you must do this when you use unit test
// console.log(errorCode('E01'));
// console.log(errorCode('E02'));
// console.log(errorCode('E03'));
// console.log(errorCode('E04'));

// version 2
function errorCodeV2(err) {
  switch (err) {
    case 'E01':
      return 'Invalid username or password';
    case 'E02':
      return 'Missing data';
    case 'E03':
      return 'Too many attempts';
    default:
      return 'Something went wrong';
  }
}
module.exports = errorCodeV1;

// console.log(errorCode('E01'));
// console.log(errorCode('E02'));
// console.log(errorCode('E03'));
// console.log(errorCode('E04'));
