const OuterFunction=()=>
{ 
     let outerVariable = 100;
    
     console.log(`Printing the value of outerVariable from OuterFunction is ${outerVariable}`)
     console.log("************************************************************************")
     
const InnerFunction=()=> 
   { 
    outerVariable=outerVariable+2;
    console.log(`Printing the value of outerVariable from InnerFunction is ${outerVariable}`)
} 
return InnerFunction;
} 
const result = OuterFunction();
console.log("Describing the properties of closure:To access the value of variable outside the function")
result();   
result();
result();