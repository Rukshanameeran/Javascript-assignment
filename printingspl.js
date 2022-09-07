console.log("Program to given number is special number or not")
// num=153;
 num=145;
temp=num;
sum=0;

while (temp > 0)
{
    r = temp % 10;
    fact=1;
    for(i=1;i<=r;i++)
    {
        fact=fact*i;
    }
    sum = sum+fact;
    temp = Math.trunc(temp / 10);  //getting 
}
if(sum==num)
{
    console.log(`${num} is a Special number`)
}
else

{console.log(`${num} is not a Special number`)}