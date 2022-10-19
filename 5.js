console.log("Function to remove leading and trailing zeros")


function removeleading(string)
{   console.log("Leading zeros")  
    console.log(" entered input :",string)
    result=string.replace(/^0+/, "")
    console.log("After removing leading zeros :",result)
    // console.log(string.replace(/^0+/, ""));
}

function removetrailing(string)
{
console.log("Trailing zeros")
console.log("Original input :",string)
console.log("After removing Trailing zeros ")
console.log(string.replace(/\.0+$/, ""));
}


removeleading("00402")
removeleading("0000456")
console.log("****************************************")
// removetrailing("230.000")
// removetrailing("3.04000")