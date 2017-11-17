'use strict';

function get_integer_interval(number_a, number_b) {
  let data = []
  if (number_a === number_b)
    data.push(number_a)

  else if (number_a > number_b) {
    for (let i = number_a; i >= number_b; i--)
      data.push(i)
  } else {
    for (let i = number_a; i <= number_b; i++)
      data.push(i)
  }

  return data
}

module.exports = get_integer_interval;
