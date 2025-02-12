const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]

console.log(cursosTodos)
console.log(c1)
console.log(c2)

cursosC2.map((el)=>{
    el.classList.add("destaque")

})