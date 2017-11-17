function count_same_elements(collection) {
  return collection.reduce((array, value) => {
    let obj = {
      name: getCode(value),
      summary: getCodeNumber(value)
    }
    let entry = array.find(ele => ele.name === obj.name)
    entry ? entry.summary += obj.summary : array.push(obj)
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
