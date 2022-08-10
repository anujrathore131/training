var num = Math.floor(Math.random() * 10);

for(i=0; i<3;i++){

    var n = Number(prompt("enter number"));

    if (n == num){
        document.write()
        document.write("<h1>You Won But At What Cost</h1>")
        break
    }
    else if(i==2){
    document.write("<h1>You Lost</h1>")
    break
     }

    confirm("You have "+(2-i)+ " chances left")
    

}

document.body.style.backgroundColor = "beige";




