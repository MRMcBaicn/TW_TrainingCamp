'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  // return collectionA.filter((value)=>collectionB.indexOf(value)!==-1)
  let data =[]
  for (let i = 0, length = collectionA.length; i < length; i++) {
    if (collectionB.indexOf(collectionA[i]) !== -1)
      data.push(collectionA[i])
  }
  return data;
}