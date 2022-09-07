console.log("program to find leap year or not")
//n=2100;
// n=1900
// n=1800
n=2000
if(n%4===0)
{
    if(n%100===0 && n%400==0)
        console.log(`${n} is a leap year`)
    else
        console.log(`${n} is not a leap year`)
}
else
console.log(`${n} is not a leap year`)