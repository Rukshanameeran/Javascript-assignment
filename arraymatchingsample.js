/*Array1=["a", "b", "c", "d"]
Array2=["e", "f", "g", "h", "a", "i", "j"]*/

Array1=["a", "b", "c", "d","g"]
Array2=["a", "b","c"]

 let count=0;
for(i=0;i<Array1.length;i++)
{
for(j=0;j<Array2.length;j++)
{
    if((Array1[i])==(Array2[j]))
    {
 count=count+1;
 console.log("Match found between Array1 and Array2",Array1[i])
 console.log("---------------------------------------------")
    }
}
} console.log("Number of elements matching from Array1 and Array2 :",count)
if(count==0){console.log("No match  found between Array1 and Array2")}