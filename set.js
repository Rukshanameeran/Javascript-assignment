//1. Can we put duplicate values in the set object ?
//1. WE cannot put duplicate values in the set object.
//Set is a collection of unique values.


// syntax for creating new set object
// 2a) Creating new set object 
let set=new Set();
//2b) adding new element in the set
set.add("rukshana");
set.add("blockchain");
set.add("blockchain");// we cannot put duplicate values in the set..only unique values accepted in the set

set.add("Javascript")
//2c)deleting element from set
set.delete("Javascript")
console.log("printing elements in a set :")
console.log(set)
console.log("Size of a set is :")
console.log(set.size)
