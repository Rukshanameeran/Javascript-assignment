console.log("Iterate over all the characters of the word iNeuron")
let string="iNeuron";
let itr=string[Symbol.iterator]();

let result=itr.next();

 //while(!result.done)
//  while(result.done==false)   //it will iterate till done value becomes true
while(result.done!=true)
 {
    console.log(result.value);
    result=itr.next();
 }