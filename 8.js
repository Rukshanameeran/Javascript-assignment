function isValidHexCode(string)
{
console.log("Entered string :",string)
exp=/#[\d?a-fA-F]{6}/
if(string.match(exp))
{   console.log("Result is True")
    console.log("Valid hex code") }
else{ console.log("Result is False")
    console.log("InValid hex code") }
}
isValidHexCode("#EAECEE")
console.log("--------------------")
isValidHexCode("#CD5C5C")
console.log("--------------------")
isValidHexCode("#CD5C&C")
// isValidHexCode("#12ea56")
// isValidHexCode("#CDcaaC")
