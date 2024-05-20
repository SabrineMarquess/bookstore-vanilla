// Objetos de todas as tabelas

class Livro {
    // Atributos
    constructor() {
        this.idLivro = 1;
        // this.nomeLivro = '';
        // this.autorLivro = '';
        // this.editoraLivro = '';
        // this.lancamentoLivro = 0;
        this.arrayLivros = [];
    }
    // Funções
    adicionar() {
        // alert('Vamos adicionar um livro');
        let livro = this.lerDados();

        if (this.validaCampo(livro) == true) {
            alert('salvar')
        }
        console.log(livro);
    }


    lerDados() {
        // alert('Estou lendo os dados');
        let livro = {}
        livro.idLivro = this.idLivro;
        livro.nomeLivro = document.getElementById('nomeLivro').value;
        livro.autorLivro = document.getElementById('autorLivro').value;
        livro.editoraLivro = document.getElementById('editoraLivro').value;
        livro.lancamentoLivro = document.getElementById('lancamentoLivro').value;

        return livro;
    }

    validaCampo(livro) {

        let msg = '';

        if (livro.nomeLivro == '') {
            msg += '- Informe o nome do livro \n';
        }

        if (livro.autorLivro == '') {
            msg += '- Informe o autor do livro \n';
        }

        if (livro.editoraLivro == '') {
            msg += '- Informe a editora do livro \n';
        }

        if (livro.lancamentoLivro == '') {
            msg += '- Informe o lançamento do livro \n';
        }

        if (msg != '') {
            alert(msg);
            return false
        }
        return true;
    }
}

var livro = new Livro(); 