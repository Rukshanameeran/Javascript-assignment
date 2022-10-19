function rightShift(number,x)
{
    a=Math.pow(2 , x)
    result=Math.floor(number/a)
    console.log(result)
}
const RightShift=(x,y)=>{
    b = Math.floor(x / Math.pow(2 , y));
    return b;
  };

rightShift(80,3)        //80 divided by 2^3...80/8---10
console.log(RightShift(24,2))        