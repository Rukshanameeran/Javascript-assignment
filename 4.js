console.log("two arrays find which two elements match using iterators")
Array1=["a", "b", "c", "d"]
Array2=["e", "f", "g", "h", "a", "i", "j"]

let itr1=Array1[Symbol.iterator]();
let itr2=Array2[Symbol.iterator]();
let res1=itr1.next();
let res2=itr2.next();


//iterating values in Array1 through itr1
while(res1.done==false)                  //it will iterate till done value becomes true
{
    console.log(res1.value);
    res1=itr1.next();
}
//iterating values in Array2 through itr2
while(res2.done==false)                  //it will iterate till done value becomes true
{
    console.log(res2.value);
    res2=itr2.next();
}
*/  
var match=Array2.filter(function(element)
{    
    return Array1.indexOf(element) >-1            // non-occurence (no repetition)of element it wll retun -1
})                                                 //> -1 gives repetition value

console.log("Array 1",Array1);
console.log("Array 2",Array2);


console.log("Matching element:",match)

