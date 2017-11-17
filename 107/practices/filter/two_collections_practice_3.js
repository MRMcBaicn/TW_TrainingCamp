'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  return collection_a.filter(value_a =>
    collection_b.map(value_b => value_a % value_b === 0).indexOf(true) !== -1
  )
}

module.exports = choose_divisible_integer;
