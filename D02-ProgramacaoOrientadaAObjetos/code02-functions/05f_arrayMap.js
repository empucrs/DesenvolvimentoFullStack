// 05f_arrayMap
array = [4,5,6,7,8,9,10]

var newArray = array.map( (item) => item*2 )
console.log(newArray)

newArray = array.map( (item) => {return {x: item, y: 2*item}} )
console.log(newArray)