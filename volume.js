console.log("Volume of a geometric shapes using classes and objects")
console.log(" Javascript assignment 5")
const pi=3.14;
class volume
{ 
    
constructor(radius,height)
{
    this.radius=radius;
    this.height=height;
}
    Cgetvol(r,h)
    {
        // const pi=3.14;
        let cvol=pi*r*r*h;
        return cvol;   
    }
    Sgetvol(r)
    {
        let svol=4/3*pi*r*r*r;
        return svol;
    }
Conevol(r,h)
{
    let conevol=pi*r*r*h/3
    return conevol;
}
}
let obj=new volume();
Cvol=obj.Cgetvol(1,1).toFixed(4);
console.log(`Volume of a Cylinder: ${Cvol}`)
Svol=obj.Sgetvol(1).toFixed(4);
console.log(`Volume of a sphere: ${Svol}`)
conevol=obj.Conevol(1,1).toFixed(4);
console.log(`Volume of a cone: ${conevol}`)
