function check(text)
{
    if(text.charAt(0)===text.charAt(0).toLowerCase())
    {
        console.log(`First character in the string ${text} is lowercase`)
    }
    else
    console.log(`First character in the string ${text} is uppercase`)
}
check("rukshana")
check("Rukshana")