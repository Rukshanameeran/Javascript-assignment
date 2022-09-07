console.log("A function using switch to find a grade of a student based on marks obtained")
function dis(mark)
{
    switch(true)
    {  
        //91 to 100
        case((mark>90)&&(mark<=100)):
        console.log (`Mark obtained by a student is ${mark} and Grade is S`)
        break;

        //81 to 90
        case((mark>80)&&(mark<=90)):
                console.log (`Mark obtained by a student is ${mark} and Grade is A`)
                break;

        //71 to 80
        case((mark>70)&&(mark<=80)):
        console.log (`Mark obtained by a student is ${mark} and Grade is B`)
        break;
//61 to 70
        case((mark>60)&&(mark<=70)):
           console.log (`Mark obtained by a student is ${mark} and grade is C`)
        break;
//51 to 60
        case((mark>50)&&(mark<=60)):
        console.log (`Mark obtained by a student is ${mark} and grade is D`)
        break;
        //41 to 50
case((mark>41)&&(mark<=50)):
        console.log (`Mark obtained by a student is ${mark} and Grade is E`)
        break;
// 0 to 40
case((mark>=0)&&(mark<=40)):
            console.log (`Student failed and Mark obtained by a student is ${mark}`)
        break;
default:
    console.log(" invalid marks")

    }
 }
dis(100);   //S
dis(90);     //A
dis(80);     //B
dis(77);     //B
dis(55);        //D
dis(66);         //C
dis(46);       //E
dis(40);   //Student failed
dis(0);   //student failed
dis(-1)    //Invalid
