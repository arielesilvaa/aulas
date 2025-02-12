/* 
break --> ele interrompe o programa, para parar um loop

continne --> ele para só a interação atual, depois ele continua normal !

*/ 

let n=0
let max = 1000
while(n<max) {
    console.log("Ariele Silva - " + n)
    if(n>10){
        break
    }
    n++
}

console.log('fim do programa')

for(let i=n;i<max;i++) {
    console.log("ariele silva " + i)
}
console.log("fim do programa")


let pares = 0