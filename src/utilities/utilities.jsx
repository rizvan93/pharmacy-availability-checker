const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}; //taken from https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript

export { toTitleCase };
