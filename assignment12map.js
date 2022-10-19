const emp=[
    { id:67 , name:"Hitanshu",salary:75000},
    { id:48, name :"Ninad",salary:82000},
    {id:29, name:"Amandeep", salary:98000} 
            ];
            let out=[]; 
            let emparray=[];
            let avgsal;
            function getdetails(item)
            {
                       return [item.id];
            }

            // storing all employee ids in an emparray
for(i=0;i<emp.length;i++)
{
    emparray.push(emp[i].id)
}
//using map----storing ids in emparraymap array
let emparraymap=[];
emparraymap=emp.map(emp=>emp.id)

           console.log("1 a) Printing an array of all employee ids:",emparraymap);
           console.log("1 a) Print an array of all employee ids:employee ids in seperate array:",emparray)
 
           console.log("1 b) Print count of employees:",emp.length)

          console.log("1 c) Print the name of the employee according to their id",emp.map(getnameandid));
           
          function getnameandid(item)
            {
           return [item.id] +":"+ [item.name]
           }



          function getsalary(item)
          {   
            return [item.salary];  
          }
          
          let totalSalary = 0;
for(let i = 0; i < emp.length ; i++){

   out.push(emp[i].salary)
   totalSalary = totalSalary + emp[i].salary
   avgsal=totalSalary/3;
}
console.log("1 d) Printing the salary of an employee:",emp.map(getsalary))
console.log("1 d) Salary in a seperate array:",out)        
console.log("1 e) Average salary:",avgsal)



