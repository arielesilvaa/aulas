function* perguntas (){

    const nome = yield'qual seu nome?'
    const esporte = yield'qual seu esporte?'
 return " seu nome é " + nome + ', seu esporte favorito é ' + esporte

}
const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('ariele').value)
console.log(itp.next('luta').value)

