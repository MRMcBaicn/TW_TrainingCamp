'use strict';

function rank_by_two_large_one_small(collection) {
  let data = collection.sort((a, b) => a - b)
  for (var i = 0, length = data.length; i < length - 2; i += 3) {
    let ele = data.splice(i, 1)
    data.splice(i + 2, 0, ele[0])
  }
  console.log(data)
  return data;
}
module.exports = rank_by_two_large_one_small;
