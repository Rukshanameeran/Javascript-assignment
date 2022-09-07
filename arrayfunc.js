console.log("Assignment 6")
console.log("Printing nth largest number and 3rd largest number from the array")

let a=[3,45,6,7,23,5,7,8]
console.log("given array:")
console.log(a)
for(i=0;i<a.length-1;i++)
{
    for(j=i+1;j<a.length;j++)
    {
          if(a[i]<a[j])
        {
            
            temp=a[i]
            a[i]=a[j]
            a[j]=temp;
        }
    }
}
function dis()
{console.log("Numbers are in descending order from the given array")

for(i=0;i<=a.length-1;i++)
{ console.log(a[i])}
console.log("The third largest number from that array")

console.log(a[2])
console.log("The nth largest number from that array in 0th position")

console.log(a[0])

}
dis();
// 