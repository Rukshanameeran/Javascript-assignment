
function doubleLetters(string)
{   // \1 — which refers to the first capturing group
test=/([a-z])\1+/gi

if(string.match(test))
{
console.log("Double letters match found in ",string)
}
else
{console.log("Double letters match not found in ",string) }
}
doubleLetters("looop");
doubleLetters("yummy");