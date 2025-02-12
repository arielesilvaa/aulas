function aluno(nome,nota){
    this.nome=nome
    this.nota=nota

    console.log (nome)
    console.log (nota)

    this.dados_anonimo=function(){
        setTimeout(function){
            console.log(this.nome)
            console.log(this.nota)
        },2000,
    }
}

aluno("bruno",100)