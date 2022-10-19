const arr=[1,2,3,4,5]
const add= arr =>
{
    let sum1=0;sum2=0,count1=0,count2=0;
    for(let i=0;i<arr.length;i++)
    {
        if(i%2===0)
        {  
            sum1=sum1+arr[i]
            count1=count1+1;
         }
        else
        {
            sum2=sum2+arr[i]
            count2=count2+1;
        }

    }
    diff=Math.abs(sum1-sum2)
    avg=(sum1+sum2)/2


    console.log(`Addition of numbers at odd place:${sum1}`) //1+3+5------9
    console.log(`Addition of numbers at even place:${sum2}`) //2+4------6
    console.log(`Difference of sum at odd and even place is ${diff}`)
    console.log(`Average of numbers is ${avg}`)
    console.log(`Total Number of odd numbers:${count1}`)
    console.log(`Total Number of even numbers:${count2}`)
    console.log(`GCD of ${sum1} and ${sum2} is:${gcd(sum1,sum2)}`)

    function gcd(sum1,sum2)
    {
if(sum2==0) return sum1;
 /* else */return gcd(sum2, sum1 % sum2);

    }
   


} 
add(arr);    //calling add function