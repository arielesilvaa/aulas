const caixa1 = document.querySelector('#caixa1');
const btn_c = [...document.querySelectorAll('.curso')];


console.log(caixa1.haschildnodes());
console.log(btn_c[0].hasChildnodes());
console.log(btn_c[0].Childnodes());


console.log(btn_c[0].haschildnodes > 0 ? 'Tem filhos' : 'Não tem filhos');

