console.log("Creating four random numbers from 0 to 10 and finding 8 in it")
var arr = [];
while(arr.length <4)
{
    var r = Math.floor(Math.random() * 10) ;
    //indexOf method returns the position of the first occurence of a value in an array
    //indexof method retuns -1 if the value is not found
    if(arr.indexOf(r) === -1)    //to avoid duplicate entries
    arr.push(r) 
}
var s=new Set(arr);  //converting the array into set
console.log(`Randomnumbers in set format`)
console.log(s)
console.log(`Random numbers in array format:`);
console.log(arr)
console.log("to find 8 is present or not Returns true if 8 is present else it returns false")
console.log(s.has(8))