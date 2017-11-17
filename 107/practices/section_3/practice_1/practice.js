function create_updated_collection(collection_a, object_b) {
  object_b.value.map(value => {
    let entry = collection_a.find(ele => ele.key === value)
    entry ? entry.count-- : null
  })
  return collection_a;
}

module.exports = create_updated_collection;
