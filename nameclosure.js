const myFunction = () => {
    let myname = "Rukshana";
   console.log(`First name From ParentFunction myFunction:${myname}`);

    const childFunction = () => {
        
         console.log(`name From childFunction:${myname=myname+" "+"Begam"}`);
    }
    return childFunction;
}
const result = myFunction();
result();  //when called first time, myvalue used is 2 which is from parent function myFunction() 2+1=3
result();  //calling again: previous value "myvalue" from child function used here is 3......3+1=4
 result();//calling again: previous value "myvalue" from child function used here is 4 ......4+1=5

