'use strict';

function compute_chain_median(collection) {
  var array = collection.split(/->/).map(value=>Number.parseInt(value)).sort((a,b)=>a-b)
  var length = array.length
  return length % 2 == 0 ?
    (array[length / 2-1] + array[length / 2]) / 2 :
    array[Math.ceil(length / 2-1)]
}

module.exports = compute_chain_median;
