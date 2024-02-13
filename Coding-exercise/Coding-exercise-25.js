// please use these constants in your code
const DEFAULT_LANGUAGE = 'en';
const SUPPORTED_LANGUAGE_LIST = ['en', 'vi', 'cn'];

function getLanguageCodeFromURL(url) {
  // your code here
  const languageCode = url.slice(url.indexOf('com') + 3);

  if (languageCode === '') {
    return DEFAULT_LANGUAGE;
  } else if (languageCode === '/en' || languageCode === '/en/') {
    return SUPPORTED_LANGUAGE_LIST[0];
  } else if (languageCode === '/cn' || languageCode === '/cn/') {
    return SUPPORTED_LANGUAGE_LIST[2];
  } else if (languageCode === '/vi' || languageCode === '/vi/') {
    return SUPPORTED_LANGUAGE_LIST[1];
  } else {
    return DEFAULT_LANGUAGE;
  }
}

console.log(getLanguageCodeFromURL('https://abc.com/'));
console.log(getLanguageCodeFromURL('https://abc.com/en/'));
console.log(getLanguageCodeFromURL('https://abc.com/vi/'));
console.log(getLanguageCodeFromURL('https://abc.com/cn/'));
console.log(getLanguageCodeFromURL('https://abc.com/abc'));
