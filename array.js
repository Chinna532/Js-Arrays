/*---ARRAY'S----*/

/*--1.push---*/
x=["yello","blue",true,122,null,undefined]
console.log(x)
x.push(2)
console.log(x)

/*--2.pop---*/
x=["yello","blue",true,122,null,undefined]
console.log(x)
x.pop()
console.log(x)

/*---3.unshift--*/
x=["yello","blue",true,122,null,undefined]
console.log(x)
x.unshift(25)
console.log(x)

/*---4.shift--*/
x=["yello","blue",true,122,null,undefined]
console.log(x)
x.shift()
console.log(x)

/*---5.indexof--*/
x=["yello","blue",true,122,null,"blue",undefined]
console.log(x)
console.log(x.indexOf("blue"))

/*---6.lastindexof--*/
x=["yello","blue",true,122,null,"blue",undefined]
console.log(x)
console.log(x.lastIndexOf("blue"))

/*---7.reverse--*/
x=["yello","blue",true,122,null,undefined]
console.log(x)
console.log(x.reverse())

/*---8.tostring--*/
x=["yello","blue",true,122,null,undefined]
console.log(x)
console.log(x.toString())

/*---9.slice--*/
x=["yello","blue",true,122,null,undefined]
console.log(x)
console.log(x.slice(0,2))

/*---10.splice--*/
x=["yello","blue",true,122,null,undefined]
console.log(x)
console.log(x.slice(0,2))
console.log(x.splice(0,2))
console.log(x.splice(0,2,"red","pink"))
console.log(x)

/*---11.join---*/
x=["yello","blue",true,122,5,8]
console.log(x.join())
console.log(x.join(" and "))

/*---12.forof loop--*/

let col=["red","blue","green","white"]
for(let x of col)
{
    console.log(x)
}

/*---13.keys--*/
let color=["red","blue","green","white"]
let y=col.keys()
for(let x of y)
{
    console.log(x)
}

/*--14.values---*/
let colr=["red","blue","green","white"]
let z=col.values()
for(let x of z)
{
    console.log(x)
}

/*--15.entries---*/
let cor=["red","blue","green","white"]
let b=col.entries()
for(let x of b)
{
    console.log(x)
}

/*----16.Filter---*/

let ages=[33,4,22,2,54,65]
console.log(ages.filter(adult))
function adult(ages){
    return ages>18
}

/*---17.Map---*/
let u=[1,2,3,5,8,5]
let v=u.map(num=>num*10)
console.log(v)

let u1=[1,2,3,4,8,5]
let v1=u.map(Math.sqrt)
console.log(v1)

/*---18.flat---*/
let x21=[[1, 2], [3, 4],[5,6]];
console.log(x21.flat())

/*----19.fill---*/
let x31=["red","green","blue","black"]
let x32=x31.fill("blue",1,3)
console.log(x32)

/*---20.find---*/
let x4=[2,3,4,5,6,7]
let x41=x4.find(Element=>Element>4)
console.log(x41)


/*---21.findIndex--*/
let x5=[2,3,4,5,6,7]
let x51=x5.findIndex(Element=>Element>6)
console.log(x51)


/*---22.some---*/
let x6=[1,5,1]
let x61=x6.some(Element=>Element>4)
console.log(x61)

/*---23.every---*/
let x7=[4,5,5,5]
let x71=x7.every(Element=>Element>4)
console.log(x71)

/*----24.sort----*/
let x8=[4,5,12,63]
x8.sort((a,b)=>b-a)
console.log(x8)