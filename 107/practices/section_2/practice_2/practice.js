function count_same_elements(collection) {
  return collection.reduce((array, value) => {
    let obj = {
      key: getCode(value),
      count: getCodeNumber(value)
    }
    let entry = array.find(ele => ele.key === obj.key)
    entry ? entry.count += obj.count : array.push(obj)
    return array
  }, [])
}

function getCode(code) {
  var pattern = /^[a-z]+/

  return code.match(pattern)[0]
}

function getCodeNumber(code) {
  var pattern = /\d+/
  return Number.parseInt(code.match(pattern)) || 1
}
module.exports = count_same_elements;
