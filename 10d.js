console.log("Break the string into two halves and swap them")
function replace(str)
{
    const arr=str.split(" ")
    arr1=arr.reverse();
    arr2=arr1.join(" ")
    console.log(`Original string is ${str} and after \nreplacing first word and second word :${arr2}`)
    

}
replace("Hii Boy")
console.log("\n")
replace("Hii Rukshana")
