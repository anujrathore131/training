// const nums = [8,27,64,125,216];

// const arr =[]
// nums.forEach(element => {
//     arr.push(Math.cbrt(element))

// }
// );
// console.log(arr)
st = setInterval(nameIt,3000);
setTimeout(clearIt,15000);
function nameIt() {
    document.write('<h1>'+"Hello"+"<br></h1" )
}
function clearIt(){
    clearInterval(st)
}


