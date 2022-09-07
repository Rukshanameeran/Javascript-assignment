console.log("program to find sum of multiples of 3 and 5")

sum=0
i=1;
while(i<=1000)
{
    if((i%3===0)&&(i%5===0))
    {
        sum=sum+i
        i++
    }
    else
    i++ 
}
console.log(`The sum of multiples of 3 and 5 under 1000 = ${sum}`)
