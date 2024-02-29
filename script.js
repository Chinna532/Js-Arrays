/*
//output methods
--console.log("Hello Javascript");
console.error("This is an Error")
console.warn("This is warning")
document.write("This is rajesh")
document.writeln("nayak banoth")
window.alert("this is alert")
window.prompt("this is prompt")
window.confirm("do you want  to confirm& proceed")--*/



//by using string literal
//let x="rajeshnayak"
//console.log(x)


//by using string constructor

/**let y="adward"
console.log(y.length)
console.log(y.slice(0,5))
console.log(y.substring(2))
console.log(y.substr(0,5))
console.log(y.trimEnd())
console.log(y.padStart(18,"banoth "))
console.log(y.padEnd(18," banoth"))


//by using data types
const x=10;
document.write(x);

let y="Banoth Rajesh Nayak Banotn Chinna";
console.log(y.slice(1,20))
console.log(y.length)
console.log(y.substring(4,12))
console.log(y.substr(0,12))
console.log(y.trimStart())
console.log(y.replace('Banoth','Chinna'))
console.log(y.replaceAll('Banoth',"Chinna"))
console.log(y.startsWith('B'))
console.log(y.endsWith('n'))
console.log(y.indexOf('e'))
console.log(y.lastIndexOf('a'))
console.log(y.toUpperCase())
console.log(y.toLocaleLowerCase())
console.log(y.includes('Nayak'))

//let a=Number(prompt('Enter a value'))
//let b=Number(prompt('Enter b value'))
//let sum=a+b
//console.log('sum of ${a} and ${b} is')
//console.log(sum)



let v
console.log(v)

var x=5,y=6,z=7;
var x=x++ + --z - y++;
var y=z-- - y-- + ++x;
var z=--z + ++y - --x;  11 11null 11null 112 9 22  22 5.5 1
var sum=x+y+z; 
console.log(sum)
let x="11";
let y="2";
z=x%y;
console.log(z)

//control statements
let x="20"
if(x<12){
    document.write(x+ " is greater")
}
else if(x%2==0){
   document.write(x+ " is even")
}
else{
    document.write(x+ "is odd")
}


let y="50"
if(y>10)
{
    if(y%2==0){
        document.write(y+ "is even")
    }
    else{
        document.write(y+ "is odd")
    }
}
else{
    document.write(y+ " invalid")
}



var color="blue"
var color
switch(color){
    case blue:
        document.write("color");
        break;
    
}


switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  document.write("Today is " + day)


  var color = "violate";
 
switch(color) {
    case "yellow":
        document.write("color-1");
        break;
    case "red":
        document.write("color-2");
        break;
    case "blue":
        document.write("color-3");
        break;
    case "green":
        document.write("color-4");
        break;
    case "black":
        document.write("color-5");
        break;
    default:
        document.write("color-6");
        break;
}



// program to check given number even or odd

let x= 12;
if(x%2==0){
   document.write(x+ " is even")
}
else{
    document.write(x+ " is odd")
}
document.write("</br>");
document.write("</br>");
//program to check given number is greater than zero or not if greater then check condition is even or odd

let y=52;
if(y>0){
  if(y%2==0){
    document.write(y+ " is even")
 }
  else{
    document.write(y+" is odd")   
  }
}
else{
    document.write(y+ " is less than zero")  
}
document.write("</br>");
document.write("</br>");
//program to check given year leap year not

let z=1704;
if((z % 100 === 0) ? (z % 400 === 0) : (z % 4 === 0)){
  document.write(z+ " is a leap year")
  
}
else{
  document.write(z+ " is not a leap year")
  
}
document.write("</br>");
document.write("</br>");
//program to find largest of two numbers

let a=98;
let b=90;
if (a > 0 && b > 0 && a > b) {
  document.write("The larger number is " + a );
} else if (a > 0 && b > 0 && a < b) {
  document.write("The larger number is " + b);
} else if (a === b && a > 0 && b > 0) {
  document.write("Both numbers are equal!")
} else {
    document.write("Please add an integer!");
}
document.write("</br>");
document.write("</br>");
//program to find largest of two numbers
let c=33;
let d=99;
let e=660;
if (c >= d && c >= e) {
  document.write("The larger number is " + c );
} else if (d >= c && d >= e) {
  document.write("The larger number is " + d );
} else {
  document.write("The larger number is " + e );
}
document.write("</br>");
document.write("</br>");
//program to find given number positive or negative or zero

let f=80;
if(f>0){
  document.write("given number is positive")
}else if(f<0){
  document.write("given number is negative")
}
else{
  document.write("given number is zero")
}
document.write("</br>");
document.write("</br>");
//program to find given number is from which month

var month="1 && 2 && 3 && 4 && 5 && 6 && 7 && 8 && 9 && 10 && 11 && 12"
switch(month="9"){
  case "1":
    document.write("january");
    break;
  case "2":
      document.write("february");
      break;
  case "3":
    document.write("march");
    break;
  case "4":
    document.write("april");
    break;
  case "5":
      document.write("may");
      break;
  case "6":
    document.write("june");
    break;
  case "7":
    document.write("july");
    break;
  case "8":
      document.write("august");
      break;
  case "9":
    document.write("september");
    break;
  case "10":
    document.write("octomber");
    break;
  case "11":
      document.write("november");
      break;
  case "12":
    document.write("december");
    break;
  default:
    document.write("invalid");
    break;
}
document.write("<br>");
document.write("<br>");
//program to find given characters owl or consonants

var char="a && e && i && o && u"
switch(char="i"){
  case "a":
    document.write("given character is a owel")
    break;
  case "e":
    document.write("given character is a owel")
    break;
  case "i":
    document.write("given character is a owel")
    break;
  case "o":
    document.write("given character is a owel")
    break;
  case "u":
    document.write("given character is a owel")
    break;
  default:
    document.write("given character is consonant")
}

document.write("</br>");
document.write("</br>");

var ch='i';
if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u' ||ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U'){
  if (ch.toUpperCase() === ch) {
  // 👇️ this runs
  document.write("given letter is uppercase");
}
else {
  document.write("given letter is lowercase");  
}
}
else{
  document.write("<b>"+ch+"</b>" + " is a Consonant");
}
*/




/*program to prin 1 to 10
  for(x=1;x<=10;x++)
  {
    document.write(x+ "x <br>")
  }
/*program to print 10 to 1
for(y=10;y>=1;y++){
  document.write(y+ "y <br>")
}
//program to print even numbers from 1 to 10
//programs to print odd from 1 to 10 and sum of total odd numbers
//program to find swap two numbers prime perfect spy



//program to find lenght of given value or string
let v=58719;
let u=0;
while(v!=0){
  let r=v%10;
  u++;
  v=v/10
}
document.write(u)

*/

/*
for(let i=1; i<=5;i++){
  for(let j=1;j<=5;j++){
    document.write("*")
  }
  document.write("<br/>")
}



for(let i=1; i<=5;i++){
  for(let j=1;j<=i;j++){
    document.write("*")
  }
  document.write("<br/>")
}




for(let i=1; i<=5;i++){
  for(let k=1;k<=5-i;k++){
    document.write("&nbsp;&nbsp")
  }
  for(let j=1;j<=i;j++){
    document.write("*")
  }
  document.write("<br/>")
}

for(let i=1; i<=5;i++){
  for(let j=1;j<=5-i;j++){
    document.write("*")
  }
  document.write("<br/>")
}

for(let i=1; i<=5;i++){

  for(let k=1;k<=5-i;k++){
    document.write("&nbsp;&nbsp")
  }

  for(let j=1;j<=i;j++){
    document.write("*")
  }

  for(l=2;l<=i;l++){
    document.write("*")
  }
  document.write("<br/>")
}

for(let i=4; i>=1;i--){

  for(let k=0;k<=4-i;k++){
    document.write("&nbsp;&nbsp")
  }

  for(let j=1;j<=i;j++){
    document.write("*")
  }

  for(l=2;l<=i;l++){
    document.write("*")
  }
  document.write("<br/>")
}





for(let i=5; i>=1;i--){
  for(let k=1;k<=5-i;k++){
    document.write("&nbsp;&nbsp")
  }
  for(let j=1;j<=i;j++){
    document.write("*")
  }
  for(l=1;l<=i;l++){
    document.write("*")
  }
  document.write("<br/>")
}


for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    document.writeln("1")
  }
  document.writeln("<br/>")
}
*/

let s=1;
for(let i=1;i<=7;i++){
  for(let j=1;j<=s;j++){
    document.writeln("*")
  }
  if(i<4){
    s++
  }
  else{
    s-- 
  }
  document.write("<br/>")
}
//swastik pattern
let star=5
for(let i=1;i<=5;i++){
  for(let j=1;j<=star;j++){
    if(i==3  || j==3){
      document.writeln("*")
    }
else if(i<=3 && j==1 ){
  document.writeln("*")
}
else if(j<=3 && i==5){
  document.writeln("*")
}
else if(j>=3 && i>=3 && j==5){
  document.writeln("*")
}
else if(j>=3 && i==1 ){
  document.writeln("*")
}
else{
  document.writeln("&nbsp;&nbsp;")
}
  }
  document.writeln("<br/>")
}

//first
document.write("first")
document.writeln("<br/>")
star=5
for(let i=1;i<=5;i++){
  for(j=1;j<=star;j++){
    document.write("* ")
  }
document.writeln("<br/>")
}
//second
document.write("second")
document.writeln("<br/>")
for(i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    if(i==1 || i==5){
      document.write("* ")
    }
    else if(j==1 || j==5){
      document.write("* ")
    }
    else{
      document.writeln("&nbsp;&nbsp")
    }
  }
  document.writeln("<br/>")
}
//third
document.write("third")
document.writeln("<br/>")
for(let i=1; i<=5;i++){
  for(let j=1;j<=i;j++){
    document.write("*")
  }
  document.write("<br/>")
}

//four
document.write("four")
document.writeln("<br/>")
for(i=1;i<=5;i++){
  for(k=1;k<=5-i;k++){
    document.writeln("&nbsp;")
  }
  for(j=1;j<=i;j++){
    document.write("*")
  }
  document.writeln("<br/>")
}

//five
document.write("five")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  
  for(j=1;j<=6-i;j++){
    document.write("*")
  }
  document.writeln("<br/>")
}
//six
document.write("six")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(k=2;k<=i;k++){
    document.writeln("&nbsp;")
  }
  for(j=1;j<=6-i;j++){
    document.write("*") 
  }
  document.writeln("<br/>")
}
//seven
document.write("seven")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    if( i==j || i==5 || j==1){
      document.write("* ")
    }
    else{
      document.writeln("&nbsp;&nbsp")
    }
  }
  document.write("<br/>")
}
//eight
document.write("eight")
document.writeln("<br/>")
for(let i=1; i<=5;i++){

  for(let k=0;k<=4-i;k++){
    document.write("&nbsp;&nbsp")
  }

  for(let j=1;j<=i;j++){
    document.write("*")
  }

  for(l=2;l<=i;l++){
    document.write("*")
  }
  document.write("<br/>")
}
//nine
document.write("nine")
document.writeln("<br/>")
for(let i=5; i>=1;i--){

  for(let k=0;k<=4-i;k++){
    document.write("&nbsp;&nbsp")
  }

  for(let j=1;j<=i;j++){
    document.write("*")
  }

  for(l=2;l<=i;l++){
    document.write("*")
  }
  document.write("<br/>")
}
//ten
document.write("ten")
document.writeln("<br/>")
for(let i=1; i<=4;i++){

  for(let k=0;k<=4-i;k++){
    document.write("&nbsp;&nbsp")
  }

  for(let j=1;j<=i;j++){
    document.write("*")
  }

  for(l=2;l<=i;l++){
    document.write("*")
  }
  document.write("<br/>")
}
for(let i=3; i>=1;i--){

  for(let k=0;k<=4-i;k++){
    document.write("&nbsp;&nbsp")
  }

  for(let j=1;j<=i;j++){
    document.write("*")
  }

  for(l=2;l<=i;l++){
    document.write("*")
  }
  document.write("<br/>")
}
//elaven
document.write("eleven")
document.writeln("<br/>")
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    document.write("*")
  }
  document.write("<br/>")
}
for (let i = 1; i <= 4 - 1; i++) {
  for (let j = 0; j < 4- i; j++) {
    document.write("*")
  }
  document.write("<br/>")
}

//twelve
document.write("twelve")
document.writeln("<br/>")
let n = 4;

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    document.write("&nbsp;&nbsp")
  }
  for (let k = 0; k < i; k++) {
    document.write("*")
  }
  document.write("<br/>")
}
for (let i = 1; i <= n - 1; i++) {
  for (let j = 0; j < i; j++) {
    document.write("&nbsp;&nbsp")
  }
  for (let k = 0; k < n - i; k++) {
    document.write("*")
  }
  document.write("<br/>")
}
//thirteen
document.write("Thirteen")
document.writeln("<br/>")
for(let i=3; i>=1;i--){

  for(let k=0;k<=3-i;k++){
    document.write("&nbsp;&nbsp")
  }

  for(let j=1;j<=i;j++){
    document.write("*")
  }

  for(l=2;l<=i;l++){
    document.write("*")
  }
  document.write("<br/>")
}
for(let i=1; i<=3;i++){

  for(let k=0;k<=3-i;k++){
    document.write("&nbsp;&nbsp")
  }

  for(let j=1;j<=i;j++){
    document.write("*")
  }

  for(l=2;l<=i;l++){
    document.write("*")
  }
  document.write("<br/>")
}


//diagonals
document.write("diagonals")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  
  for(j=1;j<=i;j++){
    if(i==j || j==i){
      document.write("*")
    }
    else(
      document.write("&nbsp;")
    )
  }
  document.writeln("<br/>")
}
//cross symbol
document.write("cross symbol")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  
  for(j=1;j<=5;j++){
    if(i===j || i+j==6){
      document.write("*")
    }
    else(
      document.write("&nbsp;")
    )
  }
  document.writeln("<br/>")
}




//Alphabets
document.write("A")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    if(i==1 || i==3 || j==1 || j==5){
      document.write("* ")
    }
    else{
      document.write("&nbsp;&nbsp;&nbsp;")
    }
  }
  document.write("<br/>")
}

document.write("B")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    if(i==1 || i==3 || j==1 || j==5 || i==5){
      document.write("* ")
    }
    else{
      document.write("&nbsp;&nbsp;&nbsp;")
    }
  }
  document.write("<br/>")
}

document.write("C")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    if(i==1  || j==1  || i==5){
      document.write("* ")
    }
    else{
      document.write("&nbsp;&nbsp;&nbsp;")
    }
  }
  document.write("<br/>")
}

document.write("D")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    if(i==1 || j==1 || j==5 || i==5){
      document.write("* ")
    }
    else{
      document.write("&nbsp;&nbsp;&nbsp;")
    }
  }
  document.write("<br/>")
}

document.write("E")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    if(i==1 || i==3 || j==1 || i==5){
      document.write("* ")
    }
    else{
      document.write("&nbsp;&nbsp;&nbsp;")
    }
  }
  document.write("<br/>")
}

document.write("F")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    if(i==1 || i==3 || j==1){
      document.write("* ")
    }
    else{
      document.write("&nbsp;&nbsp;&nbsp;")
    }
  }
  document.write("<br/>")
}

document.write("G")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    if(i==1 || j==1 || i==5){
      document.write("* ")
    }
    else if(i==3 && j>=3 || i==4 && j==5){
      document.write("* ")
    }
    else{
      document.write("&nbsp;&nbsp;&nbsp;")
    }
  }
  document.write("<br/>")
}

document.write("H")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    if(i==3 || j==1 || j==5){
      document.write("* ")
    }
    else{
      document.write("&nbsp;&nbsp;&nbsp;")
    }
  }
  document.write("<br/>")
}

document.write("I")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    if(i==1 || i==5 && i>=1 || j==3){
      document.write("* ")
    }
    else{
      document.write("&nbsp;&nbsp;&nbsp;")
    }
  }
  document.write("<br/>")
}

document.write("J")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    if(i==1 || i==5 && j<=2 && i>=1 || j==3){
      document.write("* ")
    }
    else{
      document.write("&nbsp;&nbsp;&nbsp;")
    }
  }
  document.write("<br/>")
}


document.write("K")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    if(j==1 || i+j==5){
      document.write("* ")
    }
    else if(i==4 && j==3 || i==5 && j==4){
      document.write("* ")
    }
    else{
      document.write("&nbsp;&nbsp;&nbsp;")
    }
  }
  document.write("<br/>")
}

document.write("L")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    if(j==1 || i==5){
      document.write("* ")
    }
    else{
      document.write("&nbsp;&nbsp;&nbsp;")
    }
  }
  document.write("<br/>")
}

document.write("M")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    if(j==1 || j==5){
      document.write("* ")
    }
    else if(i==2 && j==2 || i==3 && j==3 || i==2 && j==4){
      document.write("* ")
    }
    else{
      document.write("&nbsp;&nbsp;&nbsp;")
    }
  }
  document.write("<br/>")
}

document.write("N")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    if(i==j || j==1 || j==5){
      document.write("*")
    }
    else{
      document.writeln("&nbsp;")
    }
  }
  document.write("<br/>")
}

document.write("O")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    if(i==1 || j==1 || j==5 || i==5){
      document.write("* ")
    }
    else{
      document.write("&nbsp;&nbsp;&nbsp;")
    }
  }
  document.write("<br/>")
}

document.write("P")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    if(i==1 || i==3 || j==1 ){
      document.write("* ")
    }
    else if(i==2 && j==5){
      document.write("* ")
    }
    else{
      document.write("&nbsp;&nbsp;&nbsp;")
    }
  }
  document.write("<br/>")
}

document.write("R")
document.writeln("<br/>") 
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    if(i==1 || j==1){
      document.write("* ")
    }
    else if(i<=3 && j==5 || i==3){
      document.write("* ")
    }
    else if(i==4 && j==3 || i==5 && j==4){
      document.write("*")
    }
    else{
      document.write("&nbsp;&nbsp;&nbsp;")
    }
  }
  document.write("<br/>")
}

document.write("S")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    if(i==1 || i==3 || i==5){
      document.write("* ")
    }
    else if( i==2 && j==1){
      document.write("* ")
    }
    else if( i==4 && j==5){
      document.write("* ")
    }
    else{
      document.write("&nbsp;&nbsp;&nbsp;")
    }
  }
  document.write("<br/>")
}

document.write("T")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    if(i==1 || j==3 ){
      document.write("* ")
    }
    else{
      document.write("&nbsp;&nbsp;&nbsp;")
    }
  }
  document.write("<br/>")
}

document.write("U")
document.writeln("<br/>") 
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    if(i==5 || j==1 ||j==5){
      document.write("* ")
    }
    else{
      document.write("&nbsp;&nbsp;&nbsp;")
    }
  }
  document.write("<br/>")
}

document.write("X")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    if(i==j || i+j==6){
      document.write("* ")
    }
    else{
      document.write("&nbsp;&nbsp;&nbsp;")
    }
  }
  document.write("<br/>")
}

document.write("Z")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    if(i==1 || i==5|| i+j==6){
      document.write("* ")
    }
    else{
      document.write("&nbsp;&nbsp;&nbsp;")
    }
  }
  document.write("<br/>")
}



//number patterns

document.write("Number patterns")
document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=i;j++){
    document.write(i + (" "))
  }
  document.write("<br/>")
}

document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=i;j++){
    document.write(j + (" "))
  }
  document.write("<br/>")
}

document.writeln("<br/>")
let r=1
for(let i=1;i<=5;i++){
  for(j=1;j<=i;j++){
    document.write(r+ " ")
    r++;
  }
  document.write("<br/>")
}

document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=5-i;j++){
    document.write("&nbsp")
  }
  for(let k=1; k<=i;k++){
    document.write(i + (" "))
  }
  document.write("<br/>")
}

document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=5-i;j++){
    document.write("&nbsp")
  }
  for(let k=1; k<=i;k++){
    document.write(j + (" "))
  }
  document.write("<br/>")
}


document.writeln("<br/>")
let p=1
for(let i=1;i<=5;i++){
  for(j=1;j<=5-i;j++){
    document.writeln("&nbsp")
  }
  for(let k=1; k<=i;k++){
    document.write(p + (" "))
    p++;
  }
  document.write("<br/>")
}

document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    document.write(j + (" "))
  }
  document.write("<br/>")
}

document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    document.write(i + (" "))
  }
  document.write("<br/>")
}

document.writeln("<br/>")
let b=1
for(let i=1;i<=5;i++){
  for(j=1;j<=5;j++){
    document.writeln(b + (" "))
    b++
  }
  document.write("<br/>")
}

document.writeln("<br/>")
for(let i=1;i<=5;i++){
  for(j=1;j<=6-i;j++){
    document.write(j + (" "))
  }
  document.write("<br/>")
}

/*
document.write("<br/>") 
for(let i=1;i<=3;i++){
  for(k=1;k<=3-i; k++){
    document.write("&nbsp")
  }
  for(j=1;j<=i;j++){
    if(i/2){
      document.write(j + (" "))
    }
  }
  document.write("<br/>")
}

*/



document.write("palindrome")
document.writeln("<br/>")
st=1; spc=2; 
for(let i=1; i<=3;i++){
  for(let k=1;k<=spc; k++){
    document.writeln("&nbsp")
  }
  let m=i;
  for(let j=1;j<=st;j++){
    if(j<st/2){
      document.write(m--)
    }
    else{
      document.write(m++)
    }
  }
  document.write("<br/>")
  st+=2;
  spc--;
}

document.writeln("<br/>")
st=1; spc=2; 
for(let i=1; i<=3;i++){
  for(let k=1;k<=spc; k++){
    document.writeln("&nbsp")
  }
  let m=1;
  for(let j=1;j<=st;j++){
    if(j<st/2){
      document.write(m++)
    }
    else{
      document.write(m--)
    }
  }
  document.write("<br/>")
  st+=2;
  spc--;
}



document.write("odd numbers")
document.writeln("<br/>")
let c=1
for(let i=1;i<=5;i++){
  for(j=1;j<=i;j++){
    document.write(c+ " ")
    c+=2;
  }
  document.write("<br/>")
}
document.write("even numbers")
document.writeln("<br/>")
let d=1
for(let i=1;i<=4;i++){
  for(j=1;j<=i;j++){
    document.write(d+ " ")
    d*=2;
  }
  document.write("<br/>")
}


document.writeln("<br/>")
st=1; spc=2; 
for(let i=1; i<=3;i++){
  for(let k=1;k<=spc; k++){
    document.writeln("&nbsp")
  }
  let m=1;
  for(let j=1;j<=st;j++){
    if(j<st/2){
      document.write(m++)
    }
    else{
      document.write(m--)
    }
  }
  document.write("<br/>")
  st+=2;
  spc--;
}
st=3; spc=1; 
for(let i=2; i>=1;i--){
  for(let k=1;k<=spc; k++){
    document.writeln("&nbsp")
  }
  let m=1;
  for(let j=1;j<=st;j++){
    if(j<st/2){
      document.write(m++)
    }
    else{
      document.write(m--)
    }
  }
  document.write("<br/>")
  st-=2;
  spc++;  
}