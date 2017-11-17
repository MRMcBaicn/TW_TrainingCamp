'use strict';

function get_letter_interval(number_a, number_b) {
  let data = []
  if (number_a >= number_b)
    for (var i = number_a; i >= number_b; i--)
      data.push(get_code_by_number(i))
  else
    for (var i = number_a; i <= number_b; i++)
      data.push(get_code_by_number(i))
  return data
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

module.exports = get_letter_interval;
