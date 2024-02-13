// coding exercise 09: Convert so giay sang chuoi hh:mm:ss;

// please try to use these constants in your code
const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

// format so giay luon hien thi 2 chu so

// using if...else
('use strict');

function formatSecondsV1(seconds) {
  // your code here
  if (seconds < 0 || seconds >= 60) {
    return -1;
  }

  if (seconds.toString().length === 1) {
    return `0${seconds}`;
  } else {
    return seconds.toString();
  }
}

// using slice()
function formatSecondsV2(seconds) {
  // your code here

  if (seconds.toString().length === 1) {
    return `0${seconds}`;
  } else {
    return seconds.toString();
  }
}

function formatTime(seconds) {
  // your code here

  if (seconds > SECONDS_PER_HOUR * SECONDS_PER_MIN || seconds < 0) {
    return '';
  }

  let hh = Math.trunc(seconds / SECONDS_PER_HOUR).toString();
  hh = formatSecondsV1(hh);
  let mm = Math.trunc((seconds % SECONDS_PER_HOUR) / SECONDS_PER_MIN).toString();
  mm = formatSecondsV1(mm);
  let ss = (seconds % SECONDS_PER_HOUR) % SECONDS_PER_MIN;
  ss = formatSecondsV1(ss);

  return `${hh}:${mm}:${ss}`;
}

console.log(formatTime(37002));
