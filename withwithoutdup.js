let arr =[ 1, 2, 3, 2, 3, 4, 5 ];
console.log("Using filter method to remove duplicated elements in the array and finding unique elements")

let unique = arr.filter((c, index) => {
    return arr.indexOf(c) === index;   });
console.log("Original aray is :",arr)
console.log("After removing duplicates in the array:");
console.log(unique)


let dup=arr.filter((c,index)=>
{
return   arr.indexOf(c)!==index;
});
console.log("Duplicated elements stored in the seperate array:");
console.log(dup)
