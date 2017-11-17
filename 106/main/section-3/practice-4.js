'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  // let collectionC = collectionA.reduce((array, word) => {
  //   let data = (() => {
  //     var patternWord = /^[a-zA-X]/
  //     var patternSummary = /\d+/
  //     var name = word.match(patternWord)[0]
  //     var summary = Number.parseInt(word.match(patternSummary)) || 1
  //     return {
  //       key: name,
  //       count: summary
  //     }
  //   })()

  //   let entry = array.find((value) => value.key === data.key)

  //   entry ? entry.count += data.count : array.push(data)
  //   return array
  // }, [])
  // objectB.value.map(value => {
  //   let entry =collectionC.find(element=>value===element.key)
  //   if(entry)
  //   entry.count-=Math.floor(entry.count/3)
  // })
  // return collectionC
  
  let data=[]
  for(var ele of collectionA)
  {
    let obj=assembly(ele)
    let entry=findElement(data,obj.key)
    entry?entry.count+=obj.count:data.push(obj)
  }

  for(var value of objectB.value )
  {
      let entry=findElement(data,value)
      entry?entry.count-=Math.floor(entry.count/3):null
  }
  return data
}

var findElement = function (data, value) {
  for (var obj of data) {
    if (obj.key == value)
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