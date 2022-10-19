// var a="YES"
// var a="yes"
var a="Yes"
var regex=/^yes$/i;
if(regex.test(a))
{ console.log("entered YES or yes or Yes ")}
else{ console.log("You have not entered YES or yes or Yes")}