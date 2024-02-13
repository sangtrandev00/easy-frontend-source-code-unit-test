// format so giay luon hien thi 2 chu so

// using if...else
'use strict';

function formatSecondsV1(seconds) {
  // your code here
  if (seconds < 0 || seconds >= 60) {
    return -1;
  }

  // if (seconds.toString().length === 1) {
  //   return `0${seconds}`;
  // }
  // if (seconds.toString().length === 2) {
  //   return `${seconds}`;
  // }

  // if (seconds.toString().length > 2) {
  //   return `${seconds.toString().slice(-2, -1)}`;
  // }

  if (seconds.toString().length === 1) {
    return `0${seconds}`;
  } else {
    return seconds.toString();
  }
}

// using slice();

function formatSecondsV2(seconds) {
  // your code here

  if (seconds.toString().length === 1) {
    return `0${seconds}`;
  } else {
    return seconds.toString();
  }
}
