
console.log("finding maximum range of a triangle's third edge")
function nextEdge(s1,s2)
{
if(s1&& s2<=0){ console.log("The side lengths of the triangle must be of positive integers.") }
if (s1&& s2>0) 
    {
return (s1+s2)-1
    }
}


//(side1 + side2) - 1 = maximum range of third edge.

console.log("The value of side3 from nextEdge(8, 10) :",nextEdge(8, 10))
console.log("The value of side3 from nextEdge(5, 7) :",nextEdge(5, 7))
console.log("The value of side3 from nextEdge(9, 2) :",nextEdge(9, 2))
console.log("---------------------------------------------------")
let max=Math.max(nextEdge(8,10), nextEdge(5,7),nextEdge(9,2));

console.log("the maximum range of a triangle's third edge is :", max)


//nextEdge(8, 0); if called then output will be The side lengths of the triangle must be of positive integers.



