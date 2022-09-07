console.log("To check givennumber is Armstrong number")
let num=153
// let num=371
// let num=370
// let num=407
// let num=135
sum=0
temp=num
while(temp>0)
{ 
    // getting ones digit of a number
    let r=temp%10;  //3
    sum=sum+(r*r*r)   //0+27=27
    // Getting second digit from 153
    
temp= Math.trunc(temp/10);
    // temp=temp/10   //15
    // this 15 stored in temp and enteres while loop again
/*next iteration r=15%10 so tens digit number 5 is obtained then sum=27+(5*5*5)//152
the temp stores 15,then temp=temp is 15 which is divided by 10 temp=temp/10 gives first digit then temp=1 
then temp value is 1 >0 enters loop r=1%10==> 1 which is added to sum value 152+1=153*/
}
if(sum===num)
{
    console.log("Armstrong num")
}
else
console.log("Not a armstrong num")