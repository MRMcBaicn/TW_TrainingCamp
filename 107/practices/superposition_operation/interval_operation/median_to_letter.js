'use strict';

function median_to_letter(collection) {

  var number, length = collection.length
  if (length % 2 === 0)
    number = (collection[length / 2] + collection[length / 2 - 1]) / 2
  else
    number = collection[Math.floor(length / 2)]
  return get_code_by_number(Math.ceil(number))
}

function get_code_by_number(number) {
  let code = ''
  while (number > 0) {
    let codeNumber = number % 26 || 26
    code = String.fromCharCode(96 + codeNumber) + code;
    number = (number - codeNumber) / 26
  }
  return code
}

module.exports = median_to_letter;
