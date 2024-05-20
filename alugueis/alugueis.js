var atrasado = document.querySelectorAll(".atrasado");
var pendente = document.querySelectorAll(".pendente");
var devolvido = document.querySelectorAll(".devolvido");

atrasado.forEach(function (elemento) {
    elemento.textContent = "Em atraso";
});

pendente.forEach(function (elemento) {
    elemento.textContent = "Pendente";
});

devolvido.forEach(function (elemento) {
    elemento.textContent = "Devolvido";
});

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
// Excluir
const buttonExcluir = document.querySelectorAll('.open-modal-excluir');
const closeExcluir = getElement('.close-modal-excluir');
const cancelarExcluir = getElement('.cancelarbutton-excluir');
const containerExcluir = getElement('.modalexcluircaixa');
const modalExcluir = getElement('.modalexcluir');

const openModalExcluir = () => containerExcluir.classList.add('modal-show-excluir');
const closeModalExcluir = () => containerExcluir.classList.remove('modal-show-excluir');

buttonExcluir.forEach(button => {
    button.addEventListener('click', openModalExcluir);
});

closeExcluir.addEventListener('click', closeModalExcluir);
cancelarExcluir.addEventListener('click', closeModalExcluir);
// Editar
const buttonEditar = document.querySelectorAll('.open-modal-editar');
const closeEditar = getElement('.close-modal-editar');
const cancelarEditar = getElement('.cancelarbutton-editar');
const containerEditar = getElement('.modaleditarcaixa');
const modalEditar = getElement('.modaleditar');

const openModalEditar = () => containerEditar.classList.add('modal-show-editar');
const closeModalEditar = () => containerEditar.classList.remove('modal-show-editar');

buttonEditar.forEach(button => {
    button.addEventListener('click', openModalEditar);
});

closeEditar.addEventListener('click', closeModalEditar);
cancelarEditar.addEventListener('click', closeModalEditar);
// Add Aluguel
const buttonAddAluguel = document.querySelectorAll('.open-modal-addaluguel');
const closeAddAluguel = getElement('.close-modal-addaluguel');
const cancelarAddAluguel = getElement('.cancelarbutton-addaluguel');
const containerAddAluguel = getElement('.modaladdaluguelcaixa');
const modalAddAluguel = getElement('.modaladdaluguel');

const openModalAddAluguel = () => containerAddAluguel.classList.add('modal-show-addaluguel');
const closeModalAddAluguel = () => containerAddAluguel.classList.remove('modal-show-addaluguel');

buttonAddAluguel.forEach(button => {
    button.addEventListener('click', openModalAddAluguel);
});

closeAddAluguel.addEventListener('click', closeModalAddAluguel);
cancelarAddAluguel.addEventListener('click', closeModalAddAluguel);


