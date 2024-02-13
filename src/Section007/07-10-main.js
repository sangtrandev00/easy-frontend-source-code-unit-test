//console.log('\u2026'); --> ellipsis character!
// expect result --> Vd: truncate('easy Frontend',4); => eas...

//code version 1, my own!
function truncate(text, maxLength) {
  let cutString;
  if (text.length > maxLength) {
    cutString = text.slice(0, maxLength - 1);
    return `${cutString}\u2026`;
  }

  if (text.length <= maxLength) {
    // return `${text}`;

    return text;
  }
}
console.log(truncate('Hello I am is Sang, I am 21 years old', 20));

// code version 2 optimize
function truncateVersion2(text, maxLength) {
  let shortString;
  if (text.length <= maxLength) {
    return text;
  }

  shortString = text.substring(0, maxLength - 1);
  return `${shortString}\u2026`;
}

console.log(truncateVersion2('Hello I am is Sang, I am 21 years old', 20));
