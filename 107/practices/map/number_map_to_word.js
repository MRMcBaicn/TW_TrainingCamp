'use strict';
var number_map_to_word = function(collection){
  return collection.map(value => get_code_by_number(value))
};
function get_code_by_number(number) {
  let code = ''
  while (number > 0) {
    let codeNumber = number % 26 || 26
    code = String.fromCharCode(codeNumber + 96) + code
    number = (number - codeNumber) / 26
  }
  return code
}
module.exports = number_map_to_word;
