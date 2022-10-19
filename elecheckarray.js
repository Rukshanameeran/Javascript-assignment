// console.log("to take 2 arrays from the user and check if the number 4 exists in any of the arrays, or both of the arrays");
//input1
// let arr1=[1,2,3,4,5]
// let arr2=[ 4, 6, 1, 8, 2 ]
// //input2

// let arr1=[1, 2, 3, 6, 5 ]
// let arr2=[ 4, 6, 1, 8, 2 ]

// // input 3

// let arr1=[1,2,3,4,5]
// let arr2=[ 5, 6, 1, 8, 2]
// //input 4

let arr1=[1,2]
let arr2=[3,6]

let c=0,d=0;
x=Math.max(arr1.length,arr2.length)
for(i=0;i<x;i++)
{
    if(arr1[i]==4)
    { c=c+1}
    if(arr2[i]==4)
    {d=d+1}
}
if(c>0 && d>0)
{
    console.log("4 exists in both the arrays")
    console.log(` number of times 4 exists in arr1 [${arr1}] is ${c}  and \n number of times 4 exists in arr2 [${arr2}]is ${d}  `)

}

else if(c===0 && d===0)
{
    console.log(`4 does not exists in both the arrays: arr1 [${arr1}] and arr2 [${arr2}]`)
}

else if( c==0)
{ console.log(`4 exists only in arr2 [${arr2}] is ${d}`)}
else
//(d==0)
{console.log(` 4 exists only in arr1 [${arr1}]: is ${c}`)}



