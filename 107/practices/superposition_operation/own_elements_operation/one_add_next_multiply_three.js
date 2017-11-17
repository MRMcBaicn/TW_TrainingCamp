'use strict';

function one_add_next_multiply_three(collection) {
  let data = []
  for (var i = 0, length = collection.length; i < length - 1; i++)
    data.push((collection[i] + collection[i + 1]) * 3)
  return data
}
module.exports = one_add_next_multiply_three;
