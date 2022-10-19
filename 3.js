function nextIterator(arr) {
  let count = 0

  function next() {
    return arr[count++]
  }
  
  // return an object literal with the next method
  return {
    next
  }
}

const array = [1,2,3,4,5,6];
const iteratorWithNext = nextIterator(array);


console.log(iteratorWithNext.next()); 
console.log(iteratorWithNext.next()); 
console.log(iteratorWithNext.next());
console.log(iteratorWithNext.next()); 
console.log(iteratorWithNext.next()); 
console.log(iteratorWithNext.next());