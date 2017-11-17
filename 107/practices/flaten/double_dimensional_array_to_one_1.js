'use strict';

function double_to_one(collection) {

  return collection.reduce((array,value)=>{
    return array.concat(value)
  },[])
}

module.exports = double_to_one;
