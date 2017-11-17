'use strict';

module.exports = function countSameElements(collection) {
  // return collection.reduce((array, word) => {
  //   let entry = array.find((value) => value.key === word)
  //   entry ? entry.count++ : array.push((() => {
  //     var patternWord = /^[a-zA-X]/
  //     var patternSummary = /\d+/
  //     var name = word.match(patternWord)[0]
  //     var summary = Number.parseInt(word.match(patternSummary)) || 1
  //     return {
  //       key: name,
  //       count: summary
  //     }
  //   })())
  //   return array;
  // }, [])

  let data = []
  for (var ele of collection) {
      var obj=assembly(ele)
      var entry=findElement(data,obj)
      entry?entry.count+=obj.count:data.push(obj)
  }
  return data
 }

 var findElement = function (data, value) {
  for (var obj of data) {
    if (obj.key == value.key)
      return obj
  }
  return null
}

 var assembly=function(ele){
   let obj={}
   obj.key=ele[0]
   obj.count=''
   for(var i=2,length=ele.length;i<length;i++)
   {
      if(ele[i]>='0'&&ele[i]<='9')
      obj.count+=ele[i]
   }
   obj.count=Number.parseInt(obj.count)||1
   return obj
 }