
function demo(){
    document.write("hello")
}
demo()



document.writeln("<br/>")

function add(a,b){
    document.write(a+b)

}
add(5,45)

document.writeln("<br/>")


function sub(a,b){
    return a-b;
}
document.write(sub(76,12))

document.writeln("<br/>")
//1. Write a function that returns the square and cube of a number
function square(num) {
    return `square ${(num*num)}, cube: ${(num*num*num)}`;
  }
  document.write(square(12))
  document.writeln("<br/>")


//function with parameter

function squar(num) {
  document.write(`square ${(num*num)}, cube: ${(num*num*num)}`);
}
squar(2)
document.writeln("<br/>")

//2.Write a function to find the area of a given Rectangle
function recArea(a,b) {
    return `rectangle ;perimeter${2*(a+b)}, area : ${a*b}`;
  }
  
  document.write(recArea(1,30))
  document.writeln("<br/>")

  //function with parameters

  function recAra(a,b) {
    document.write(`rectangle ;perimeter${2*(a+b)}, area : ${a*b}`);
  }
  
  recAra(10,30)
  document.writeln("<br/>")

  //3.Write a function to find the area and perimeter of a Circle

  function circle(a) {
    return `Perimeter: ${2*3.14*a}, Area: ${3.14*a*a}`;
  }
  document.write(circle(2))
  document.writeln("<br/>")

  //function with parameters

  function circl(a) {
    document.write(`Perimeter: ${2*3.14*a}, Area: ${3.14*a*a}`);
  }
  circl(22)
  document.writeln("<br/>")


//4.Write a function to reverse a number
  function reverse(a) {
    var reverse = 0;
    while(a != 0)
    {
      reverse = reverse * 10;
      reverse = reverse + a%10;
      a= Math.trunc(a/10);
    }
    return reverse;
  }
  
 document.write(reverse(123456))
 document.writeln("<br/>")

//function with parameters

function revese(b) {
  var revese = 0;
  while(b != 0)
  {
    revese = revese * 10;
    revese = revese + b%10;
    b= Math.trunc(b/10);
  }
  document.write(revese)
}

revese(95556)
document.writeln("<br/>")
//5.  Write a function to convert Celsius to Fahrenheit

function calFahrenheit(cel) {
  return (cel*9/5)+32; 
}

document.write(calFahrenheit(10))
document.writeln("<br/>")
//function with parameters

function clFahrenheit(cel) {
  document.write((cel*9/5)+32); 
}

clFahrenheit(50)
document.writeln("<br/>")


/*
//anonymous function
 /*--function()
 {
  console.log("hello")
 }--

//funcction with expression
 let x=function()
 {
  console.log("hello")
 }
 x()

//first class function or citizen
  /*function()
 {
  console.log("hello")
 }
 x()

//arrow function

 a=()=>{console.log("hello world")}
 a()
 

 //arrow function
z=()=>{document.write((z*9/5)+32)}
z(5)
*/
// Closures function

function demo1(){
  let x=66;
 console.log(x) 
}
demo1()