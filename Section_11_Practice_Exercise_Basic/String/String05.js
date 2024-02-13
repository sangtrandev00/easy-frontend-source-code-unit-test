export function countURLs(str) {
  if (str === '') {
    return 0;
  }

  let arrUrls = str.split(' ').filter((url) => url !== '');
  let arrUrlDomains = arrUrls.filter(
    (url) => url.includes('.com') || url.includes('.com.vn') || url.includes('.vn')
  );
  let finalUrls = [];
  arrUrlDomains.forEach((url) => {
    let dommainName = url.substring(url.indexOf('://') + 3, url.indexOf('.'));
    if (dommainName.length >= 3) {
      finalUrls.push(url);
    }
  });

  return finalUrls.length;
}

// console.log(countURLs('my website is: http://ezfrontend.com you can visit it'));
// console.log(countURLs('my website is: https://ez.com you can visit it'));
