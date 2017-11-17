'use strict';

function choose_no_repeat_number(collection) {

  return collection.reduce((array, value) => {
    if (array.indexOf(value) === -1)
      array.push(value)
    return array
  },[])
}

module.exports = choose_no_repeat_number;
