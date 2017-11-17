function create_updated_collection(collection_a, object_b) {
  let collection_c= collection_a.reduce((array, value) => {
    let obj = {
      key: getCode(value),
      count: getCodeNumber(value)
    }
    let entry = array.find(ele => ele.key === obj.key)
    entry ? entry.count += obj.count : array.push(obj)
    return array
  }, [])

  object_b.value.map(value => {
    let entry = collection_c.find(ele => ele.key === value)
    entry ? entry.count-=Math.floor(entry.count/3) : null
  })
  return collection_c;
}

function getCode(code) {
  var pattern = /^[a-z]+/

  return code.match(pattern)[0]
}

function getCodeNumber(code) {
  var pattern = /\d+/
  return Number.parseInt(code.match(pattern)) || 1
}

module.exports = create_updated_collection;
