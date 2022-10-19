let students = [
{ name: "John", marks: 92},
{ name: "Oliver", marks: 85 },
{ name: "Michael", marks: 79 },
{ name: "Dwight", marks: 95},
{ name: "Oscar", marks: 64 },
{ name: "Kevin", marks: 48 },
];
/*
>90 = A
>80 = B
>70 = C
>60 = D
>50 = E
else = F

*/
function getmarks(item)
{
    if(item.marks> 90){ console.log(`${item.name} got A grade `)}
    else if(item.marks> 80){ console.log(`${item.name} got B grade `)}
    else if(item.marks> 70){ console.log(`${item.name} got C grade `)}
    else if(item.marks> 60){ console.log(`${item.name} got D grade `)}
    else if(item.marks> 50){ console.log(`${item.name} got E grade `)}
    else {console.log(`${item.name} got F grade `)}
    // return item.marks;
}
console.log("To compute Grade using marks obtained by students")
students.map(getmarks);//calling getmarks(item) to calculate grade

const mapstds=new Map();
mapstds.set("John",92 )
mapstds.set("Oliver",85 )
mapstds.set("Michael",79)
mapstds.set(" Dwight", 95)
mapstds.set("Oscar", 64)
mapstds.set("Kevin", 48)
console.log("----------------------")
console.log("Mapping done:")
console.log(mapstds)


