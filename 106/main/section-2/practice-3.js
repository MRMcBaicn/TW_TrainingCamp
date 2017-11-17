'use strict';

module.exports = function countSameElements(collection) {
  // return collection.reduce((array, word) => {
  //   let data=(() => {
  //     var patternWord = /^[a-zA-X]/
  //     var patternSummary = /\d+/
  //     var name = word.match(patternWord)[0]
  //     var summary = Number.parseInt(word.match(patternSummary)) || 1
  //     return {
  //       name: name,
  //       summary: summary
  //     }
  //   })()

  //   let entry = array.find((value) => value.name === data.name)
    
  //   entry ? entry.summary+=data.summary : array.push(data)
  //   return array;
  // }, [])
  let data = []
  for (var ele of collection) {
      var obj=assembly(ele)
      var entry=findElement(data,obj)
      entry?entry.summary+=obj.summary:data.push(obj)
  }
  return data
 }

 var findElement = function (data, value) {
  for (var obj of data) {
    if (obj.name == value.name)
      return obj
  }
  return null
}

 var assembly=function(ele){
   let obj={}
   obj.name=ele[0]
   obj.summary=''
   for(var i=2,length=ele.length;i<length;i++)
   {
      if(ele[i]>='0'&&ele[i]<='9')
      obj.summary+=ele[i]
   }
   obj.summary=Number.parseInt(obj.summary)||1
   return obj
 }