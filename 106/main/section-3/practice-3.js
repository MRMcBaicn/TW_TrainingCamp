'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  // var collecttionC = collectionA.reduce((array, value) => {
  //   let entry = array.find(element => element.key === value)
  //   entry ? entry.count++ : array.push({
  //     key: value,
  //     count: 1
  //   })
  //   return array
  // }, [])
  // objectB.value.map(value => {
  //   let entry = collecttionC.find(element => element.key === value)
  //   if (entry)
  //     entry.count -= Math.floor(entry.count / 3)
  // })
  // return collecttionC
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