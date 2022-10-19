let sum=0;let Totsum=0;
function triangle(n)
{
for(let i=1;i<=n;i++)
{
 sum=sum+i;
console.log("Sum of dots",sum)
 Totsum=Totsum+sum;  //
 }
 console.log("------------------------------")
 console.log("Cumulative sum of dots is",Totsum)

}

triangle(6);