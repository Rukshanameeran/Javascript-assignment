function XO(string)
{  xcounter=0;
    ocounter=0;
    for(i=0;i<string.length;i++)
    {
        //if(string[i]=='x')
        if((string[i]=='x')||(string[i]=='X'))
        
            {  xcounter=xcounter+1; 
            } 
            
        if((string[i]=='o') ||(string[i]=='O'))
        {
            ocounter=ocounter+1; 
             
        }
    }        
if((xcounter==0)&&(ocounter==0))
{   console.log("x and o are not in the string",string)
    console.log("Both counter values are zero")
     console.log("True")
}
else if(xcounter==ocounter)
{ console.log("True:::The amount of x's and o's are the same")}

else if(xcounter!=ocounter)
{ console.log("False:::The amount of x's and o's are not same")  }

console.log("xcounter",xcounter)
console.log("ocounter",ocounter)            
}
console.log("Checking output")
XO("ooxx")
console.log("----------------------------")
XO("xooxx")          //x---3   o----2
console.log("----------------------------")
XO("ooxXm")
console.log("----------------------------")
XO("mnnm")



