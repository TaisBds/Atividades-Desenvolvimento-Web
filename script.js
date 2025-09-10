// botão de incrementar e de decrementar numeros 

let soma = document.getElementById("soma");
let diminui = document.getElementById("diminui");
let resultado = document.getElementById("resultado");

let contador = 0;

soma.onclick = function () {
  contador++;
  resultado.value = contador;
};

diminui.onclick = function () {
  if (contador > 0) {
    contador--;
    resultado.value = contador;
  } else {
    alert("Contador chegou em zero");
  }
};

// Digitar Texto e apertar enter para coloca-lo em um paragrafo

let texto = document.getElementById("texto");
let digitado = document.getElementById("digitado");

texto.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    digitado.innerText = texto.value;
    texto.value = ""; 
  }
});

// Digitar um texto e contar em tempo real os caracteres sem somar o espaço

let texto1 = document.getElementById("texto1");
let carac = document.getElementById("carac");

texto1.addEventListener("input", function () {
  let qtd = texto1.value.replace(/\s/g, "").length;
  carac.value = qtd;
});

// Usuário escolhe lista ordenada ou desordenada e adiciona um item a lista

let tipoLista = document.getElementById("Listas");
let itemTexto = document.getElementById("itemTexto");
let adicionar = document.getElementById("adicionar");
let listapronta = document.getElementById("listapronta");

let lista = null; 

// Função para criar lista conforme seleção

function criarLista() {
  listapronta.innerHTML = ""; 
  if (tipoLista.value === "ol" || tipoLista.value === "ul") {
    lista = document.createElement(tipoLista.value); 
    listapronta.appendChild(lista);
  } else {
    lista = null; 
  }
}

// Quando o usuário mudar o tipo da lista

tipoLista.addEventListener("change", criarLista);

// Quando clicar em adicionar

adicionar.addEventListener("click", function () {
  if (lista && itemTexto.value.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = itemTexto.value;
    lista.appendChild(li);
    itemTexto.value = ""; 
  }

});
// um botão que limpa todos os campos anteriores 

// Botão que limpa todos os campos anteriores
// Botão que limpa todos os campos anteriores
let limpar = document.getElementById("Limpar");

limpar.addEventListener("click", function () {
  // Limpar contador
  contador = 0;
  resultado.value = "";

  // Limpar texto digitado no parágrafo
  texto.value = "";
  digitado.innerText = "";

  // Limpar contador de caracteres
  texto1.value = "";
  carac.value = "";

  // Limpar lista
  listapronta.innerHTML = "";
  lista = null;

  // Resetar select da lista para valor inicial
  tipoLista.value = "Esc";
});
