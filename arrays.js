var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(myArr, newElem){
  var newChocolateBars = [newElem, ...myArr];
  return newChocolateBars
}

 function destructivelyAddElementToBeginningOfArray(myArr1, newElem1){
   var myArr = [newElem1, ...myArr1];
   return myArr
 }

 function addElementToEndOfArray(myArr, newElem){
   var newChocolateBars = myArr.push(newElem);
   return newChocolateBars
 }

function destructivelyAddElementToEndOfArray(myArr, newElem){
  myArr.push(newElem);
  return myArr
}

function accessElementInArray(myArr, idx){
  return myArr[idx]
}

function destructivelyRemoveElementFromBeginningOfArray(myArr){
  return myArr.shift()
}

function removeElementFromBeginningOfArray(myArr){
  var newArr = myArr.splice(1);
  return newArr
}

function destructivelyRemoveElementFromEndOfArray(myArr){
  return myArr.pop()
}

function removeElementFromEndOfArray(myArr){
  var newArr = myArr.splice(0, myArr.length -1);
  return newArr
}
