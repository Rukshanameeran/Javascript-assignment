console.log("Reverse of a String By 2 methods")
let string="Hello";
let newString="";
let output=[];
console.log("Reverse of a string by Array:");

for(let i=string.length-1;i>=0;i--)
{
   output.push(string[i]);
}console.log(output.join(""));

for(let i=string.length-1;i>=0;i--)
{
 newString = newString + string[i];
}
console.log("Reverse of a string :",newString);