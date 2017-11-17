function count_same_elements(collection) {
  return collection.reduce((array, value) => {
    let entry = array.find(ele => ele.key === value)
    entry ? entry.count++ : array.push({
      key: value,
      count: 1
    })
    return array
  }, [])
}

module.exports = count_same_elements;
