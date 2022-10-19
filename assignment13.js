console.log("program to get an array from the user and return the Sum of all elements in the array using reduce():")
/*
const sum=numbers.reduce(function(item,total)
{
    return item+total
})
console.log(sum)*/

let numbers=[1,2,3,4,5]
avg=numbers.reduce((tot,item)=>(tot+item))

/*
   1st call: total = 1, item = 2 => sum = 1 + 2 = 3
  2nd call: total = 3, item = 3 => sum = 3 + 3 = 6
  3rd call: total = 6, item = 4 => sum = 6 + 4 = 10
  4th call: total = 10, item = 5 => sum = 10 + 5 = 15
  */
 
avg1=avg/3
console.log(avg)
console.log(avg1)
