
/*---properties
console.log(Math.PI)
console.log(Math.E)
console.log(Math.SQRT2)
console.log(Math.SQRT1_2)
console.log(Math.LN2)
console.log(Math.LN10)
console.log(Math.LOG2E)
console.log(Math.LOG10E)
------------*/

/*----Methods

console.log(Math.round(23.55))//it gives apropriate value which is near to the given value
console.log(Math.round(23.45))

console.log(Math.ceil(23.21))//it gives highest value to the given string
console.log(Math.ceil(23.51))

console.log(Math.floor(25.41))//it giveslowest value to the given string
console.log(Math.floor(25.81))

console.log(Math.random())//print random numbers in between 0 to 1

console.log(Math.min(2,55,21,44,99))// it picks lower value in the given values
console.log(Math.min())

console.log(Math.max(1,52,44,21,25))//it picks highes value in the given values
console.log(Math.max())

console.log(Math.sqrt(4))//it gives sqrt of given value

console.log(Math.cbrt(27))//it gives cbrt of given value

console.log(Math.exp(2))//it gives exponantion of given value i.e E power 2

console.log(Math.sign(-525))//it  gives  signs of given elements if we enter positive value it gives 1 and if we give negative value it gives -1 and if we give 0 it gives 0
console.log(Math.sign(5))
console.log(Math.sign(0))

console.log(Math.abs(5))
console.log(Math.abs(0))
console.log(Math.abs(-5))

console.log(Math.pow(5,2))

console.log(Math.trunc(23.98))
--*/


//DATE METHODS

/*----first
let d1=new Date()
console.log(d1)

//second
let d2=new Date(5000)
console.log(d2)

//third
let d3=new Date("2023 11 22,12:22:22:10")
console.log(d3)

//fourth
let d4=new Date(2020,5,24,9,12,25,5000)
console.log(d4)//2020

let d41=new Date(20,5,24,9,12,25,50)
console.log(d41)//1920
*/


/*---to print Am or PM
let d11=new Date()
document.write(d11)

let hour=d11.getHours()
let min=d11.getMinutes()
let sec=d11.getSeconds()
am_pm="AM"
if(hour>=12){
    am_pm="PM"
}
else{
    am_pm="AM"
}
document.write(hour+":"+min+":"+sec+am_pm)

-----*/
/*---getting methods
let get=new Date()
console.log(get)

let a=get.getHours()
console.log(a)

let a1=get.getMinutes()
console.log(a1)

let a2=get.getMilliseconds()
console.log(a2)

let a3=get.getDate()
console.log(a3)

let a4=get.getFullYear()
console.log(a4)

let a6=get.getTimezoneOffset()
console.log(a6)

let a7=get.getDay()
console.log(a7)

let a8=get.getMonth()
console.log(a8)

let a9=get.getUTCFullYear()
console.log(a9)
----*/

/*----setting methods

get.setDate(25)
console.log(get)

get.setFullYear(2025)
console.log(get)

get.setHours(21)
console.log(get)

get.setMinutes(52)
console.log(get)
---*/

/*----string reprasents

let c=get.toLocaleDateString()
console.log(c)

let c1=get.toLocaleString()
console.log(c1)

let c2=get.toLocaleTimeString()
console.log(c2)

let c3=get.toDateString()
console.log(c3)

let c4=get.toTimeString()
console.log(c4)

let c5=get.valueOf()
console.log(c5)

let c6=get.getTime()
console.log(c6)

---*/
/*---from entries---

let r=
{
    eid:321,
    esal:22332,
    ename:"rajesh",
}
console.log(r)
let r1=Object.entries(r)
console.log(r1)

let r2=Object.fromEntries(r1)
console.log(r2)
--*/



/*---assign 
let x=
{
    eid:532,
    ename:"rajesh",
    sal:35000
}
console.log(x)
let y=
{
    email:"rajesh@gmail.com",
    company:"MNC"
}
console.log(y)

console.log(Object.assign(x,y))
---*/

/*---hasown and hasownproperty
let x=
{
    eid:532,
    ename:"rajesh",
    sal:35000
}
console.log(x)
console.log(Object.hasOwn(x,'eid'))
console.log(x.hasOwnProperty('id'))

---*/


/*---defineproperty and defineproperties
let x={}
console.log(x)
Object.defineProperty(x,'eid',{value:532})
Object.defineProperty(x,'ename',{value:'rajesh'})
console.log(x)

Object.defineProperties(x,{
    eid:{value:532},
    phone:{value:98755425},
    email:{value:"rajesh@gmail.com"}
})
console.log(x)

---*/

/*---rest parameter

function fun(a,b){
    return a+b;
}
console.log(fun(22,11))
---*/
/*---rest parameter and spread operator
let str="hello"
console.log(str)
console.log(...str)
----*/


/*----is
let x=
{
    eid:532,
    ename:"rajesh",
    sal:35000
}
let y=
{
    eid:533,
    ename:"rajesh",
    sal:40000
}
console.log(Object.is(x.eid,y.eid))
console.log(Object.is(x.ename,y.ename))
---*/
