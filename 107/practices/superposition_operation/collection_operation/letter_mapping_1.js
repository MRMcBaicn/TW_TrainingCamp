'use strict';

function even_to_letter(collection) {
  return collection.reduce((array, value) => {
    if (value % 2 === 0)
      array.push(get_code_by_number(value))
    return array
  }, [])
}

function get_code_by_number(number) {
  let code = ''
  while (number > 0) {
    let codeNumber = number % 26 || 26
    code = String.fromCharCode(codeNumber + 96) + code
    number = (number - codeNumber) / 26
  }
  return code
}
module.exports = even_to_letter;
