'use strict';

function get_intersection(collection_a, collection_b) {
  return collection_b.reduce((array, value_b) => {
    let entry = collection_a.find(value_a => value_a === value_b)
    entry ? array.push(entry) : null
    return array
  }, [])
}

module.exports = get_intersection;
