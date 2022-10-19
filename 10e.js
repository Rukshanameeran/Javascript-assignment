
function charoccur(string)
{
  let count = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      count++;
    } else {
      console.log(`${string[i]} occur ${count} times`);
    count = 1;
    }
  }
}
 
charoccur("heello");
