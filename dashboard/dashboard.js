// Modais

// Devolver
const getElement = (...queries) => document.querySelector(...queries);

const buttondevolver = document.querySelectorAll('.open-modal-devolver');
const closedevolver = getElement('.close-modal-devolver');
const cancelardevolver = getElement('.cancelarbutton-devolver');
const containerdevolver = getElement('.modaldevolvercaixa');
const modaldevolver = getElement('.modaldevolver');


const openModalDevolver = () => containerdevolver.classList.add('modal-show-devolver');
const closeModalDevolver = () => containerdevolver.classList.remove('modal-show-devolver');

buttondevolver.forEach(button => {
    button.addEventListener('click', openModalDevolver);
});

closedevolver.addEventListener('click', closeModalDevolver);
cancelardevolver.addEventListener('click', closeModalDevolver);

// Obtenha a barra de progresso e o elemento <h4> da porcentagem
var barraProgresso = document.getElementById("barrinha");
var porcentagemElement = document.getElementById("porcentagem");
var valorAtualElement = document.getElementById("valorAtual");
var valorMaximoElement = document.getElementById("valorMaximo");

// Calcule a porcentagem
var porcentagem = (barraProgresso.value / barraProgresso.max) * 100;
var valorAtual = barraProgresso.value;
var valorMaximo = barraProgresso.max;

// Atualize o conteúdo dos elementos
porcentagemElement.textContent = "(" + porcentagem.toFixed(0) + "%)";
valorAtualElement.textContent = valorAtual;
valorMaximoElement.textContent = "/ " + valorMaximo;

function atualizarValores() {
    // Obtenha os valores máximos e atuais
    var novoValorMaximo = parseInt(valorMaximoElement.textContent.split(" ")[1]);
    var novoValorAtual = parseInt(valorAtualElement.textContent);

    // Atualize a porcentagem
    var porcentagem = (novoValorAtual / novoValorMaximo) * 100;
    porcentagemElement.textContent = "(" + porcentagem.toFixed(0) + "%)";
}

// possibilitar a edição com o pincel
var textprogress = document.getElementById("textprogress")
var blocoporcentagem = document.getElementById("blocoporcentagem")
var pencilIcon = document.getElementById("pencil-icon");
var formEditar = document.getElementById("form-editar");
var inputMaximo = document.getElementById("inputMaximo");
var inputAtual = document.getElementById("inputAtual");
var valorMaximoDisplay = document.getElementById("valorMaximoDisplay"); // Elemento para exibir o valor máximo

pencilIcon.addEventListener("click", function () {
    if (formEditar.style.display === "block") {
        formEditar.style.display = "none";
        textprogress.style.display = "flex";
        blocoporcentagem.style.display = "block";
        barrinha.style.display = "block";
    } else {
        textprogress.style.display = "none";
        barrinha.style.display = "none";
        blocoporcentagem.style.display = "none";
        formEditar.style.display = "block";
        inputMaximo.value = valorMaximo;
        inputAtual.value = valorAtualElement.textContent;
        atualizarValores(); // Atualize os valores e a porcentagem
    }
});




formEditar.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    var novoValorMaximo = parseInt(inputMaximo.value);
    var novoValorAtual = parseInt(inputAtual.value);

    // Atualize os valores máximos e atuais
    barraProgresso.max = novoValorMaximo;
    barraProgresso.value = novoValorAtual;

    // Atualize os conteúdos dos elementos <span>
    valorMaximo = novoValorMaximo; // Atualize a variável valorMaximo
    valorMaximoElement.textContent = "/ " + novoValorMaximo;
    valorAtualElement.textContent = novoValorAtual;
    textprogress.style.display = "flex";
    blocoporcentagem.style.display = "block";
    barrinha.style.display = "block";
    formEditar.style.display = "none"; // Esconda o formulário após a edição

    atualizarValores(); // Atualize os valores e a porcentagem
});

// Atualize o elemento de exibição do valor máximo quando houver alteração no input
inputMaximo.addEventListener("input", function () {
    valorMaximoDisplay.textContent = "/ " + inputMaximo.value;
});

