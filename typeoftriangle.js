
console.log("To find type of triangle using function")

function triangletype(s1,s2,s3)
 {
// to check All three sides are positive number and not equal to zero then only enters if loop ...if fails come out of if loop
if((s1>0)&&(s2>0)&&(s3>0))
{
       // to check equilateral trianle
        if((s1==s2)&&(s2==s3)&&(s1==s3))
         {
        console.log("three sides are equal")
        console.log(`This is an Equilateral triangle of sides: side1 =${s1} side2 =${s2} side 3=${s3}`)
        }
        //to check isoceles
        if ((s1==s2)||(s2==s3)||(s1==s3))
        {
        console.log("Two sides are equal")
        console.log(`This is an Isoceles triangle of sides: side1 =${s1} side2 =${s2} side 3=${s3}`)
        }
        //to check scalene
        if((s1!=s2)&&(s2!=s3) &&(s1!=s3))
        {
        console.log("All sides are different")
        console.log(`This is an Scalene triangle of sides: side1 =${s1} side2 =${s2} side 3=${s3}`)
         }
    }  
    else
    {console.log(`Triangle does not exists..You entered any side value as zero or negative value`)
} 
 }
 
//  console.log(`Triangle does not exists..You entered any side value as zero or negative value`)
//  triangletype(3,-4,0);
// triangletype(3,3,3);
  triangletype(1,1,3);
// triangletype(3,4,1);
