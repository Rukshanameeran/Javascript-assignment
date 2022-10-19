console.log("Pin Validation")
console.log("*******************")
function pin(string)
{
console.log("Entered pin:",string)
exp=/^[\d]{4}$/
exp1=/^[\d]{6}$/
if((string.match(exp))||(string.match(exp1)))
{   console.log("Result is True") }
else{ console.log("Result is False") }
}
pin("1234");
console.log("--------------------")
pin("12345");
console.log("--------------------")
pin("123456");
console.log("--------------------")
// pin("12$#56")
// pin("abcd")
// pin("12ab")
// pin("#5*&v")


