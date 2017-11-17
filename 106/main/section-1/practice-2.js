'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  // return collectionA.filter((value) => {
  // return  collectionB.map((subArray) => {
  //       return subArray.indexOf(value)!==-1;
  //     })[0]
  // })
  let data = []
  for (let i = 0, lengthA = collectionA.length; i < lengthA; i++) {
    for (let j = 0, lengthB = collectionB.length; j < lengthB; j++) {
      if (collectionB[j].indexOf(collectionA[i]) !== -1)
        data.push(collectionA[i])
    }
  }
  return data;
}