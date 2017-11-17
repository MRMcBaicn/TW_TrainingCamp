function collect_same_elements(collection_a, object_b) {
  return collection_a.filter(value => object_b.value.indexOf(value) !== -1)
}

module.exports = collect_same_elements;
