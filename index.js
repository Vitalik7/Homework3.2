var arr1 = [2, -1, 9, -12, 7, 4]

/*    myForEach     */ 
Array.prototype.myForEach = function(callbackfn) {
  for (var i = 0; i < arr1.length; i++) {
    callbackfn(this[i], i, this)
  }
}

arr1.myForEach(function(el, index) {
  console.log('res: ' + el, 'index: ' + index)
  }  
)

console.log('---------------------------')

/*    myMap     */   
Array.prototype.myMap = function(callbackfn) {
  for (var i = 0; i < arr1.length; i++) {
    callbackfn.call(this[i], i, this)  
  }
  return callbackfn  
}

arr1.myMap(function(el) {
  return el
  }
)
console.log(arr1)

console.log('---------------------------')

/*    mySort     */ 
Array.prototype.mySort = function() { 
  for (var i = 1; i < arr1.length; i++) {
    var el = null
    if(arr1[i] < arr1[i - 1]){ 
      el = arr1[i] 
      arr1[i] = arr1[i - 1]
      arr1[i - 1] = el
      i = 0
    }
  }
}

arr1.mySort()

console.log(arr1)