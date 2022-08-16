function sum(a,b){
    return a+b;
}
console.log(sum(9,10));
// Functions to create objects
function Person(){
    // properties
    this.name="Yukti";
    this.age=21;
    // methods
    this.details=function(){
        return "Name: " + this.name + "and age: "+this.age;
    }
}
var X=new Person();
console.log(X.name);