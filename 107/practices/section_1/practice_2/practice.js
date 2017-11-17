function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(value => {
    for (var child of collection_b) {
      if (child.indexOf(value) !== -1)
        return true
    }
    return false
  })
}

module.exports = collect_same_elements;
