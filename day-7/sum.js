
let sum = 0;
while(1)
{
let num = prompt("Enter the number: ");
if(num >= 0)
    sum = sum + Number(num);
else
{
    document.write("<h1>The Sum Is :" +sum+ "</h1>")
    break;
}  
}


document.body.style.backgroundColor = "beige";
