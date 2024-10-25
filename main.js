class Produto {
    constructor() {
        this.id = 1; 
        this.arrayProdutos = [];
    }

    salvar() {
      
        let produto = this.lerDados();

        if (this.validaCampos(produto)) {
            this.adicionar(produto);
            this.listaTabela();
        }
        
    }


});