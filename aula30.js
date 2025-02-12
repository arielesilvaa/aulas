const dc1= document.getElementById("c1")
console.log(dc1)

dc1.innerHTML="ariele silva"

const arrayElementos =[dc1,dc2,dc3,dc4,dc5]

//for(d of arryElementos)
// d.innerHTML="cfb"

arrayElementos.map((e)=>{
    e.innerHTML="ARIELE"
    console.log(e)
})