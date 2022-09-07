console.log("A program to find the factorial of all prime numbers between 1 and 100 using function prime");
function primenum()
{

for (let i = 1; i <= 100; i++)
 {
    let flag = 0;
    



    for (let j = 2; j < i; j++)
     {
        if (i % j == 0) 
        {
            flag = 1;
            break;
        }
    }


    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0)
     {
        console.log("Prime number : "+i)
        // console.log(i);
        factorial(i)
        
    }
}
}
primenum(1,100);
    //factorial function to compute factorial of all prime numbers between 1 and 100
    function factorial(i)
        {
            fact=1;
            for(j=1;j<=i;j++)
            {
                fact=fact*j;
            }
console.log("Factorial of "+i+"="+fact )

        }
        
        
    

