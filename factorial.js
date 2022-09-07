console.log("Factorial")
// n=5
// n=0
n=-5


 if(n==0 || n==1)
 console.log(`Factorial of a ${n} is 1`)

 else if(n<0)
{
    console.log(`Factorial of a ${n} does not exists`)  
}
 else{
    let fact=1
    for(i=1;i<=n;i++)
    {
        fact=fact*i
    }
    console.log(`Factorial of a ${n} is ${fact}`) 
 }