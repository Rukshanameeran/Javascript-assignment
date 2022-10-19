console.log("Some ways of converting string into array")

let string1="Blockchain Development";
console.log("1.By split method")
let arr=string1.split("")
console.log(arr)

console.log("By split--empty space")

let arr1=string1.split(" ")
console.log(arr1)

console.log("2. By Array.from")
let string2="Rukshana"
let arr2=Array.from(string2);
console.log(arr2);
console.log("3. By Spread operator")
let string3 = 'rukshana';
let arr3 = [...string3];
console.log(arr3); 
