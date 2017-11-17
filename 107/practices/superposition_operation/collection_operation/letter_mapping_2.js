'use strict';

function average_to_letter(collection) {

  var sum = collection.reduce((sum, value) => sum + value)
  var average = Math.ceil(sum / collection.length)
  return get_code_by_number(average)
}

function get_code_by_number(number) {
  let code = ''
  while (number > 0) {
    let codeNumber = number % 26 || 26
    code = String.fromCharCode(96 + codeNumber) + code
    number = (number - codeNumber) / 26
  }
  return code
}

module.exports = average_to_letter;
