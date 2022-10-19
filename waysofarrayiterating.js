
console.log("different ways of iterating through an array")
let dailyRoutine=['wakeup','bath','eat','sleep']
//wakeup is one instance,bath is one instance...so on...now instance is storing in a variable name as routine
//For-of
console.log("Using for-of loop")
console.log("----------------------")
for(let routine of dailyRoutine)
{
    console.log(routine);
}
console.log("Using for-in loop")
console.log("----------------------")
for(let routine in dailyRoutine)
{   console.log(routine, dailyRoutine[routine])
}

console.log("Using for-Each loop")
console.log("----------------------")
// dailyRoutine.forEach(function(index,routine)
// {
//     console.log(index,routine)
// })
// by arrow function:
// dailyRoutine.forEach((index,routine)=> console.log(index,routine))

console.log("Using Map")
console.log("----------------------")
var text="Routine list:"
var newArray= dailyRoutine.map(function(routine) 
{     return text+routine;})
console.log("After mapping")
console.log("*****************")
console.log(newArray)

console.log("Using Filter method")
console.log("-------------------------")
Array1=[2, 4, 1,3]

var arr=Array1.filter(function(value,index,array)
{
    return value%2==0 })
console.log("Even numbers from the array is:",arr)

// var arr=Array1.filter((value)=> (value%2)==0)
// console.log(arr)

console.log("Using Reduce method")
var reducedResult=Array1.reduce(function(sum,total,index,array)
{
    return sum+total
})
console.log("Sum of array elements :",reducedResult)

