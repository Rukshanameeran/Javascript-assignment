let s="ruksh"
slen=s.length;

if(slen>4)
{ console.log("Original string is "+s)
    let slen4=s.slice(0,4)
    console.log("After truncating the original string :" +slen4)
}
else if(slen<=4)
{    console.log("Original string length is less than or equal to 4")
    console.log("string is " +s+ " is of length " + slen)
}


