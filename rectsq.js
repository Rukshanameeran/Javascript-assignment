console.log("Printing Area of Rectangle and square ")
console.log("Assignment 6")
class Rect
{
    constructor(length,breadth)
    {    
        this.length=length
        this.breadth=breadth
    }
    R_area_display()
    {
        let R_area=this.length*this.breadth
        
        console.log(`Area of a Rectangle whose sides are: 
        length ${this.length} and Breadth ${this.breadth} is :${R_area}` )
            //  console.log(R_area)

    }
        Sq_area_display()
        {
        let S_area=this.side*this.side;
        console.log(`Area of a Square whose side ${this.side} is  ${S_area}`)
        // console.log(S_area)
        }
    }
 class Square extends Rect
 {
 constructor(side)
 {    
    super();
    this.side=side;
 }
}

let obj=new Rect(3,2)
let obj1=new Square(3)
obj.R_area_display()
obj1.Sq_area_display()
