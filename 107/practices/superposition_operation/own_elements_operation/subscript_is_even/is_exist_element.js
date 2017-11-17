'use strict';
var is_exist_element = function (collection, element) {
  for (var i = 0, length = collection.length; i < length; i += 2)
    if (collection[i] === element)
      return true
  return false
};
module.exports = is_exist_element;
