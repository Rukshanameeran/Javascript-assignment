
let students = [
    { name: "John", grade: 'A'},
    { name: "Oliver", grade:'B' },
    { name: "Michael", grade: 'C' },
    { name: "Dwight", grade:'A' },
    { name: "Oscar", grade: 'D'  },
    { name: "Kevin", grade: 'F' },
    ];

function groupBy(stdArray,grade) {

  return stdArray.reduce(function (acc, obj) {

    // var key = obj[grade];
    var key=obj.grade
    if (!acc[key])  //if the accumulator doesn't already have data for that key,
    {
      acc[key] = []; //put an empty array
    }
    acc[key].push(obj);
    return acc;

}, {});
}

var grade = groupBy(students, 'grade');
console.log(grade)
