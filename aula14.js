/*    Declaração de Switch Case      */ 

/*       
 ele avalia uma expreção e de acrodo com o resultado ele compara com os quases que esta programado para comparação !

 se um caso tiver corespondecia ele cair um caso um bloco e execulta a função 


*/ 

let colocacao= 5

switch(colocacao) {
    case 1:
        console.log("Primeiro lugar")
        break
    case 2: console.log("Segundo lugar")
         break
    case 3: console.log("Terceiro lugar")
        break
    case 4: case 5: case 6:
        console.log ("Premio de Participação")
        break
    default: console.log("Não subiu ao podio")
    break
}