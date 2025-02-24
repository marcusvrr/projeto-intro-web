const personagem1 = {
  nome: "Harry Potter",
  altura: 1.82,
  casa: "Grifinória",
  bruxo: "Sim",
  varinha: ['azevinho', 'pena de cauda de fênix'],
  img: "https://i.pinimg.com/originals/4a/b8/b9/4ab8b92486db607956c626db43aa3a68.jpg",
  link: "https://harrypotter.fandom.com/pt-br/wiki/Harry_Potter"
};

const personagem2 = {
  nome: "Alvo Dumbledore",
  altura: 1.80,
  casa: "Grifinória",
  bruxo: "Sim",
  varinha: ['sabugueiro', 'pelo de testrálio'],
  img: "https://i.pinimg.com/originals/69/9c/ba/699cba41508f95fe2e6539882024acdd.jpg",
  link: "https://harrypotter.fandom.com/pt-br/wiki/Alvo_Dumbledore"
};

const personagem3 = {
  nome: "Hermione Granger",
  altura: 1.67,
  casa: "Grifinória",
  bruxo: "Sim",
  varinha: ['videira', 'fibra de coração de dragão'],
  img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/89256849192035.58f2f01a4aeb4.jpg",
  link: "https://harrypotter.fandom.com/pt-br/wiki/Hermione_Granger"
};

const personagem4 = {
  nome: "Rony Weasley",
  altura: 1.87,
  casa: "Grifinória",
  bruxo: "Sim",
  varinha: ['freixo', 'pelo de unicornio'],
  img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d2821b49755981.58bdff1ebedc9.jpg",
  link: "https://harrypotter.fandom.com/pt-br/wiki/Ronald_Weasley"
};

const personagem5 = {
  nome: "Severo Snape",
  altura: 1.85,
  casa: "Sonserina",
  bruxo: "Sim",
  varinha: ['silver lime', 'dragão'],
  img: "https://pm1.narvii.com/6330/e3a49671308367dbad3476ad057f1aaf0f6da46b_hq.jpg",
  link: "https://harrypotter.fandom.com/pt-br/wiki/Severo_Snape"
};

const personagem6 = {
  nome: "Tom Riddle",
  altura: 1.80,
  casa: "Sonserina",
  bruxo: "Sim",
  varinha: ['teixo', 'pena de cauda de fênix'],
  img: "https://i.pinimg.com/736x/56/d5/57/56d557bba34e23111bfa5561069cbad2--saga-harry-potter-harry-potter-stuff.jpg",
  link: "https://harrypotter.fandom.com/pt-br/wiki/Tom_Riddle"
};

/*Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log.
Guarde este valor em uma const*/
const mediaAltura = (personagem1.altura + personagem2.altura + personagem3.altura + personagem4.altura + personagem5.altura + personagem6.altura) / 6;
console.log('Média das alturas = ', mediaAltura)

/*Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas
criadas até aqui são verdadeiras.*/

const verifSeBruxo = personagem1.bruxo && personagem2.bruxo && personagem3.bruxo && personagem4.bruxo && personagem5.bruxo && personagem6.bruxo;
console.log('verificação se todos personagens são bruxos = ', verifSeBruxo); //true pq todas as const são verdadeiras.

//Semana 2
/*1. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.
2. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
  1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.
const relatorio1 = `${bruxoHp1.toUpperCase()},\n${altura1},\n${casa1},\n${bruxo1},\n${varinha1}`;
console.log(relatorio1);
const relatorio2 = `${bruxoHp2.toUpperCase()},\n${altura2},\n${casa2},\n${bruxo2},\n${varinha2}`;
console.log(relatorio2);
const relatorio3 = `${bruxoHp3.toUpperCase()},\n${altura3},\n${casa3},\n${bruxo3},\n${varinha3}`;
console.log(relatorio3);
const relatorio4 = `${bruxoHp4.toUpperCase()},\n${altura4},\n${casa4},\n${bruxo4},\n${varinha4}`;
console.log(relatorio4);
const relatorio5 = `${bruxoHp5.toUpperCase()},\n${altura5},\n${casa5},\n${bruxo5},\n${varinha5}`;
console.log(relatorio5);
const relatorio6 = `${bruxoHp6.toUpperCase()},\n${altura6},\n${casa6},\n${bruxo6},\n${varinha6}`;
console.log(relatorio6);
*/

//semana 3 transformar as constantes em objetos, crir um array e colocar os objetos por push:
//semana 4 
//1. Altere o item “Adicione os novos objetos no array de objetos, utilizando o push()” (item 3 da semana 3), para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;
//2. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push

const bruxosHp = [];
if (personagem1.bruxo === "Sim") {
  bruxosHp.push(personagem1);
} else {
  alert("Personagem não adicionado pois não é bruxo")
}

if (personagem2.bruxo === "Sim") {
  bruxosHp.push(personagem2);
} else {
  alert("Personagem não adicionado pois não é bruxo")
};

if (personagem3.bruxo === "Sim") {
  bruxosHp.push(personagem3);
} else {
  alert("Personagem não adicionado pois não é bruxo")
};
if (personagem4.bruxo === "Sim") {
  bruxosHp.push(personagem4);
} else {
  alert("Personagem não adicionado pois não é bruxo")
};
if (personagem5.bruxo === "Sim") {
  bruxosHp.push(personagem5);
} else {
  alert("Personagem não adicionado pois não é bruxo")
};
if (personagem6.bruxo === "Sim") {
  bruxosHp.push(personagem6);
} else {
  alert("Personagem não adicionado pois não é bruxo")
};

console.log('Semana 3 e 4', bruxosHp)

// Semana 5
// 1. Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2,
// altere a forma que a característica de array dos itens seja escrita como um laço que guarde
// todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no
// relatório.
// 2. Ainda no relatório, altere-o para que ele seja criado utilizando um laço. Ou seja, você
// não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a
// partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e
// verifique se ele é exibido corretamente



for (let i = 0; i < bruxosHp.length; i++) {
  let temporaria = bruxosHp[i].varinha.join();

  console.log('Semana 5', `${bruxosHp[i].nome.toUpperCase()}`, `\n${bruxosHp[i].altura}, \n${bruxosHp[i].casa}, \n${bruxosHp[i].bruxo};\n${bruxosHp[i].varinha}`);;
}

//semana 6
//1. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.


function relatorioSem6(objeto) {
  for (let i = 0; i < bruxosHp.length; i++) {
    console.log("Semana 6-1", `Nome: ${objeto[i].nome.toUpperCase()} \nAltura: ${objeto[i].altura} \nCasa: ${objeto[i].casa} \nBruxo: ${objeto[i].bruxo} \nVarinha: ${objeto[i].varinha}`);
  }
}
relatorioSem6(bruxosHp);

//2. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.

function procuraNome(array, buscaUsuario) {
  const procura = array.filter((bruxo) => bruxo.nome.toUpperCase().includes(buscaUsuario.toUpperCase()))
  if (procura.length >= 1) {
    return procura;
  } else {
    alert("nenhum item foi encontrado")
  }
}
console.log(procuraNome(bruxosHp, 'potter'));
//semana11 e 12

function geraCard(bruxos) {
  document.querySelector('#container').innerHTML = "";
  let conteudoPesquisa
  for (const bruxo of bruxos) {
    conteudoPesquisa = `<article class="card">
    <div class="bruxo-imagem"><img src="${bruxo.img}" alt="Desenho personagem"></div>
    <ul> 
        <li><a href=${bruxo.link}>Nome: ${bruxo.nome}</a></li>
        <li>Altura: ${bruxo.altura}</li>
        <li>Casa: ${bruxo.casa}</li>
        <li>Bruxo: ${bruxo.bruxo}</li>
        <li>Varinha: ${bruxo.varinha}</li>
    </ul>
  </article>`;
    document.querySelector('#container').innerHTML += conteudoPesquisa;
  }
}
geraCard(bruxosHp);

function pesquisa() {

  let conteudoPesquisa = '';
  const resultadoPesquisa = document.getElementById('searchBar').value;
  if (!resultadoPesquisa) {
    alert("Digite um personagem para fazer a busca")
  } else {
    const bruxoPesquisado = procuraNome(bruxosHp, resultadoPesquisa)
    geraCard(bruxoPesquisado)
  }
}

