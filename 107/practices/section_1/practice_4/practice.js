function collect_same_elements(collection_a, object_b) {
  return collection_a.reduce((array, value) => {
    if (object_b.value.indexOf(value.key) !== -1)
      array.push(value.key)
    return array
  }, [])
}

module.exports = collect_same_elements;
