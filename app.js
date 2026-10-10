"use strict";

const MEU_NOME = "Pedro Albuquerque";

console.log("BLOCO 1 - ARRAYS E MÉTODOS");

console.log("\n1.1 Array de nomes: forEach e map");
const nomes = ["Ana", "Bruno", "Carla"];

nomes.forEach((nome) => {
  console.log(`Olá, ${nome}!`);
});

const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase());
console.log("Nomes em maiúsculas:", nomesMaiusculos);

console.log("\n1.2 Array de preços: filter e reduce");
const precos = [10, 25, 40, 5, 60];

const precosAcima20 = precos.filter((preco) => preco > 20);
console.log("Preços acima de 20:", precosAcima20);

const somaPrecos = precos.reduce((total, preco) => total + preco, 0);
console.log(`Soma de todos os preços: ${somaPrecos}`);

console.log("\n1.3 Array de objetos: map, filter, reduce e forEach");
const produtos = [
  { nome: "Caderno", preco: 15 },
  { nome: "Mochila", preco: 120 },
  { nome: "Caneta", preco: 3 },
  { nome: "Calculadora", preco: 45 },
  { nome: "Fone de ouvido", preco: 80 },
];

const nomesProdutos = produtos.map((produto) => produto.nome);
console.log("Nomes dos produtos:", nomesProdutos);

const produtosBaratos = produtos.filter((produto) => produto.preco < 50);
console.log("Produtos com preço menor que 50:", produtosBaratos);

const totalProdutos = produtos.reduce((total, produto) => total + produto.preco, 0);
console.log(`Soma dos preços dos produtos: R$ ${totalProdutos}`);

produtos.forEach((produto) => {
  console.log(`${produto.nome}: R$ ${produto.preco}`);
});

console.log("\nBLOCO 2 - MANIPULAÇÃO DO DOM");

console.log("\n2.1 Alterando o título");
const titulo = document.querySelector("#titulo");
titulo.textContent = `Blog do ${MEU_NOME}`;
console.log(`Novo texto do título: ${titulo.textContent}`);

console.log("\n2.2 Lendo todos os parágrafos");
const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach((paragrafo) => {
  console.log(paragrafo.textContent);
});

console.log("\n2.3 Inserindo itens com innerHTML");
const lista = document.querySelector("#lista");
lista.innerHTML += "<li>Primeiro item</li><li>Segundo item</li>";
console.log("Dois itens inseridos com innerHTML.");

console.log("\n2.4 Criando um li com createElement");
const terceiroItem = document.createElement("li");
terceiroItem.textContent = "Terceiro item";
lista.append(terceiroItem);

terceiroItem.classList.add("destaque");
console.log(`O terceiro item tem a classe destaque? ${terceiroItem.classList.contains("destaque")}`);

console.log("\n2.5 Criando itens a partir de um array de tarefas");
const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];

tarefas.forEach((tarefa) => {
  const item = document.createElement("li");
  item.textContent = tarefa;
  lista.append(item);
});

lista.querySelector("li").classList.add("feito");
console.log(`Total de itens na lista: ${document.querySelectorAll("li").length}`);

console.log("\nBLOCO 3 - EVENTOS E EVENT DELEGATION");

const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
  console.log("Clicou!");
});

botao.addEventListener("mouseover", () => {
  botao.textContent = "Pode clicar!";
});

const campoNome = document.querySelector("#nome");

campoNome.addEventListener("keyup", (e) => {
  console.log(e.target.value);
});

lista.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("feito");
    console.log(`Clicou no item: ${e.target.textContent}`);
  }
});

const itemDinamico = document.createElement("li");
itemDinamico.textContent = "Item criado via JavaScript";
lista.append(itemDinamico);

itemDinamico.click();
console.log(`O clique no item criado via JavaScript funcionou? ${itemDinamico.classList.contains("feito")}`);

const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const texto = campoTarefa.value.trim();

  if (texto === "") {
    console.log("Campo vazio: nada foi adicionado.");
    return;
  }

  const novoItem = document.createElement("li");
  novoItem.textContent = texto;
  lista.append(novoItem);

  campoTarefa.value = "";
  campoTarefa.focus();
  console.log(`Tarefa adicionada: ${texto}`);
});

console.log("\nPágina pronta. Clique nos itens, digite no campo e envie o formulário.");