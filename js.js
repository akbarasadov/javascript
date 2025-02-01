//1
let num = prompt("Введите число")
let roundnum = Math.round(num)
console.log(roundnum);

//2
let a = prompt("Введите число 1")
let b = prompt("Введите число 2")
let c = prompt("Введите число 3")
let d = prompt("Введите число 4")
let e = prompt("Введите число 5")

let min = Math.min(a,b,c,d,e)
let max = Math.max(a,b,c,d,e)

console.log("min = "+min);
console.log("max = "+max);

//3
let random = Math.random()*100
console.log(parseInt(random));

//4
let f = prompt("степень1")
let g = prompt("степень2")
let h = Math.pow(f,g)

console.log(h);
