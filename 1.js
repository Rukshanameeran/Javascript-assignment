console.log("Create a function to iterate over the following list")
function iterator(arr)
{

//var names=["John","Rohn","Danny","James"];
//let itr=names[Symbol.iterator]();
let itr=arr[Symbol.iterator]();
//console.log(typeof arr[Symbol.iterator]())
let firstname=itr.next();
console.log(firstname)
let secondname=itr.next();
console.log(secondname)
let thirdname=itr.next();
console.log(thirdname)
let fourthname=itr.next();
console.log(fourthname)

console.log("Value:",itr.next().value);
console.log("Done:",itr.next().done);
}
iterator(["John","Rohn","Danny","James"]);