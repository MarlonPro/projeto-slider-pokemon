/* 

OBJETIVO 1 - quando clicar na seta de avançar tem que mostrar o próximo cartão da lista
    - passo 1 - dar um jeito de pegar o elemento GTML da seta avançar
    - passo 2 - dar um jeito de identificar o clique do usuário na seta avaçar
    - passo 3 - fazer aparecer o próximo cartão da lista
    = passo 4 - buscar o cartão que esta selecionado e esconder

*/

// - passo 1 - dar um jeito de pegar o elemento GTML da seta avançar
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;


// - passo 2 - dar um jeito de identificar o clique do usuário na seta avaçar
btnAvancar.addEventListener("click", function (){
   
  if(cartaoAtual === cartoes.length - 1) return;

  //- passo 3 - fazer aparecer o próximo cartão da lista
  console.log(cartaoAtual);
  cartaoAtual++;
  cartoes[cartaoAtual].classList.add("selecionado");

  // passo 4 - buscar o cartão que esta selecionado e esconder
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");

});


/* OBJETIVO 2 - fazer a mesma coisa mencionado acima, porem com a seta de voltar */

btnVoltar.addEventListener("click", function (){
   
  if(cartaoAtual === 0) return;
  
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");

  console.log(cartaoAtual);
  cartaoAtual--;
  cartoes[cartaoAtual].classList.add("selecionado");

  
  

});
   

 




