'use strict';

function get_integer_interval_2(number_a, number_b) {
  var data = []
  if (number_a === number_b)
    number_a % 2 === 0 ? data.push(number_a) : null

  else if (number_a > number_b) {
    for (let i = number_a; i >= number_b; i--) {
      if (i % 2 === 0)
        data.push(i)
    }
  } else {
    for (let i = number_a; i <= number_b; i++) {
      if (i % 2 === 0)
        data.push(i)
    }
  }

  return data
}

module.exports = get_integer_interval_2;
