'use strict';

function get_union(collection_a, collection_b) {
  return collection_b.reduce((array, value) => {
    if (collection_a.indexOf(value) === -1)
      array.push(value)
    return array
  }, collection_a)
}

module.exports = get_union;
