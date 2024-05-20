// profile dropdown
let subMenu = document.getElementById("subMenu")
function toggleDropdown() {
    subMenu.classList.toggle("open-menu");
}
// menu mobile
function toggleMenu() {
    const menuMobile = document.getElementById("menu-mobile");

    if (menuMobile.className === "menu-mobile-active") {
        menuMobile.className = "menu-mobile";
    } else {
        menuMobile.className = "menu-mobile-active";
    }
}

// sidebar
var buttonmenu = document.querySelectorAll('.buttonmenu');
const buttonAdm = document.querySelector('.adm');
const tabelas = document.getElementById('list-tabelas');
const buttons = document.querySelectorAll('.buttonmenu');

// Adiciona eventos de clique a todos os botões
buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Remove a classe "ativo" de todos os botões
        buttons.forEach(btn => {
            btn.classList.remove('ativo');
        });

        // Adiciona a classe "ativo" ao botão clicado
        this.classList.add('ativo');

        // Verifica se o botão "administração" está ativo
        if (buttonAdm.classList.contains('ativo') && sidebar.classList.contains('expandir')) {
            // Se estiver ativo e a sidebar estiver expandida, exibe a lista de tabelas
            tabelas.classList.add('show');
            tabelas.style.display = 'flex';
        } else {
            // Caso contrário, oculta a lista de tabelas
            tabelas.classList.remove('show');
            tabelas.style.display = 'none';
        }
    });
});

// Função para a funcionalidade das 3 barrinhas (btn expandir)
var btnExp = document.querySelector('#btn-exp');
var sidebar = document.querySelector('.sidebar');

btnExp.addEventListener('click', function () {
    sidebar.classList.toggle('expandir');

    // Verifica se o botão "administração" está ativo e a sidebar está expandida
    if (buttonAdm.classList.contains('ativo') && sidebar.classList.contains('expandir')) {
        // Se estiver ativo e a sidebar estiver expandida, exibe a lista de tabelas
        tabelas.classList.add('show');
        tabelas.style.display = 'flex';
    } else {
        // Caso contrário, oculta a lista de tabelas
        tabelas.classList.remove('show');
    
    }
});

buttonAdm.addEventListener('click', function () {
    sidebar.classList.add('expandir');

    // Verifica se o botão "administração" está ativo e a sidebar está expandida
    if (buttonAdm.classList.contains('ativo') && sidebar.classList.contains('expandir')) {
        // Se estiver ativo e a sidebar estiver expandida, exibe a lista de tabelas
        tabelas.classList.add('show');
        tabelas.style.display = 'flex';
    } else {
        // Caso contrário, oculta a lista de tabelas
        tabelas.classList.remove('show');
        tabelas.style.display = 'none';
    }
});



