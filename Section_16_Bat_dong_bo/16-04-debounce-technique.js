function log() {
  console.log('tada');
}

function debounce(callback, wait) {
  let timeoutId;
  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(callback, wait);
  };
}

const debounceLog = debounce(log, 500);

debounceLog();
debounceLog();
debounceLog();
