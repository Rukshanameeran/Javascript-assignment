
console.log("Array flattening methods")
let arr=[1, 2,[3,4,[5]]]
let flatarr=[].concat.apply([],arr)
console.log(`By using concat.apply method :${flatarr}`)
let flatarr1=[].concat(...arr)
console.log(`By using spread operator method :${flatarr1}`)

let flatarr2=arr.reduce((acc,curval)=>
{ return acc.concat(curval)} ,[]);
console.log(`By reduce method:${flatarr2}`)
