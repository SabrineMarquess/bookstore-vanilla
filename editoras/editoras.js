const getElement = (...queries) => document.querySelector(...queries);
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
// Add Usuario
const buttonAddusuario = document.querySelectorAll('.open-modal-addusuario');
const closeAddusuario = getElement('.close-modal-addusuario');
const cancelarAddusuario = getElement('.cancelarbutton-addusuario');
const containerAddusuario = getElement('.modaladdusuariocaixa');
const modalAddusuario = getElement('.modaladdusuario');

const openModalAddusuario = () => containerAddusuario.classList.add('modal-show-addusuario');
const closeModalAddusuario = () => containerAddusuario.classList.remove('modal-show-addusuario');

buttonAddusuario.forEach(button => {
    button.addEventListener('click', openModalAddusuario);
});

closeAddusuario.addEventListener('click', closeModalAddusuario);
cancelarAddusuario.addEventListener('click', closeModalAddusuario);