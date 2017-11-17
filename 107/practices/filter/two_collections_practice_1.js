'use strict';

function choose_common_elements(collection_a, collection_b) {

  return collection_a.filter(value =>
    collection_b.indexOf(value) !== -1)
}

module.exports = choose_common_elements;
