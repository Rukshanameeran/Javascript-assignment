let employees = [
{
"id": 1,
"name":"Abhinav",
"department":"IT",
"Salary":75000
},
{
"id": 2,
"name":"Gaurav",
"department":"Sales",
"Salary":52000
},
{
"id": 3,
"name":"Raj",
"department":"IT",
"Salary":64000
}]
console.log("filter employees according to department = IT")
deptresult=employees.filter(emp=>emp.department=="IT")
console.log(deptresult)
console.log("------------------------------------------")
console.log("filter employees who earn a salary < 65000")
result=employees.filter(emp=>emp.Salary<65000)
console.log(result)