
console.log(" program to check digit 7 appears in the array")
console.log("----------------------------------------------")
function sevenBoom(arr)
{ counter=0;
for(i=0;i<arr.length;i++)
{
    if(arr[i]==7)
    { counter=counter+1 }

}
if(counter==0){ console.log("7 does not exists",arr)}
else if(counter>0) { console.log("BOOM!")
    console.log("7 Exists in the array",arr) }
}

sevenBoom([1, 2, 3, 4, 5, 6, 7])
console.log("----------------------------------------------")
sevenBoom([8, 6, 33, 100])
console.log("----------------------------------------------")

sevenBoom([78, 76, 7, 100])
console.log("number of times 7 appeared in the array is :",counter)
