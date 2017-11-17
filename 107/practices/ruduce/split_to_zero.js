'use strict';

function spilt_to_zero(number, interval) {
  let data = []
  while (number > 0) {
    data.push(number)
    number -= interval
    number = Number.parseFloat(number.toFixed(1))
  }
  data.push(number)
  return data
}

module.exports = spilt_to_zero;
