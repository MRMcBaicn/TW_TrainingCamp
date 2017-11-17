'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    // return collectionA.filter((value) =>
    //     objectB.value.indexOf(value) !== -1)
    let data = []
    for (let i = 0, length = collectionA.length; i < length; i++) {
        if (objectB.value.indexOf(collectionA[i]) !== -1)
            data.push(collectionA[i])
    }
    return data;
}