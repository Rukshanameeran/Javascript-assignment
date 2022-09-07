console.log("Inserting dash in between two even numbers ")

function insertdash(string) {
    // regular expression
    return string.replace(/([02468](?=[02468]))/g, "$1-");
}
console.log("After inserting dashes")
console.log(insertdash("025468"));
// console.log(insertdash("123468"));
