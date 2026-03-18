"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var categoria;
(function (categoria) {
    categoria["eletronicos"] = "Eletr\u00F4nicos";
    categoria["livros"] = "Livros";
    categoria["vestuarios"] = "Vestu\u00E1rio";
})(categoria || (categoria = {}));
;
;
const carrinho = [];
function adicionarAoCarrinho(produto, quantidade) {
    if (quantidade < 1) {
        quantidade == 1;
    }
    if (produto.estoque < 1) {
        console.log("Erro ao adicionar produto no carrinho");
    }
    else {
        carrinho.push({ produto, quantidade });
    }
}
function calcularValorTotal(): nu{
    return carrinho.reduce((total, item) => {
        const preco = item.produto.preco - (item.produto.desconto ?? 0);
        return total + (preco * item.quantidade);
    }, 0);
}
var produto1 = {
    id: 1,
    nome: "Monitor 4K",
    preco: 2000,
    categoria: categoria.eletronicos,
    estoque: 5
};
var produto2 = {
    id: 2,
    nome: "Livro Clean Code",
    preco: 100,
    categoria: categoria.livros,
    estoque: 10,
    desconto: 15
};
var produto3 = {
    id: 3,
    nome: "Teclado Mecânico",
    preco: 500,
    categoria: categoria.eletronicos,
    estoque: 0
};
/*var erro: produto = {
    id: 4,
    nome: "Ovo",
    preco: 2,
    categoria: categoria.alimentos,
    estoque: 800
}*/
console.log(carrinho);
console.log(calcularValorTotal);
//# sourceMappingURL=loja.js.map