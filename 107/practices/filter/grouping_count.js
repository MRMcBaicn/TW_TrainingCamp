'use strict';

function grouping_count(collection) {

  return collection.reduce((valueCounts, value) => {
    if (value in valueCounts)
      valueCounts[value]++
      else
        valueCounts[value] = 1
    return valueCounts
  }, {})
}

module.exports = grouping_count;
