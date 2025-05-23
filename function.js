// function  
// syntax 

// function name (){}


function mrg (){

var a =10;
var a = 20;
console.log(a);

let b = 30;
b = 40;
console.log(b);

const c = 25;
const d = 25;
console.log(c);
console.log(d);

}
mrg();

// function types 

// Function  statement Declaration --> parameter & argument

function fun (js){
    console.log(js)
}
fun("javascript");
// Function Expression or Anonymous Function

let a = function id(exp){
    console.log(exp);
}
a("expression");
// 
let b = function (ano){
    console.log(ano);
    
}
b("function");
// Immediate Invoke Function expression 
(function (iife){
    console.log(iife);
    
})("immediate");
// Arrow Function
// syntax 
// ()=>{}

    let ar = (funt)=>{console.log(funt)}
    ar("arrow function")
