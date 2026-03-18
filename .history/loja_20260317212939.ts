enum categoria{
    eletronicos = "Eletrônicos",
    livros = "Livros",
    vestuarios = "Vestuário"
};

interface produto{
    id: Number;
    nome: String;
    preco: number;
    categoria: categoria;
    estoque: number;
    desconto ?: number;
};

interface itemCarrinho{
    produto: produto;
    quantidade: number;
}

const carrinho: itemCarrinho[] = [];

function adicionarAoCarrinho(produto:produto, quantidade:number){
    if(quantidade < 1 ){
        quantidade == 1;
    }

    if(produto.estoque < 1){
        console.log("Erro ao adicionar produto no carrinho")
    }else{
        carrinho.push({produto, quantidade});
    }
}

function calcularValorTotal(): number{
    return carrinho.reduce((total, item) => {
        const preco = item.produto.preco - (item.produto.desconto ?? 0)
        return total + (preco * item.quantidade)
    }, 0)
}

var produto1: produto = {
    id: 1,
    nome: "Monitor 4K",
    preco: 2000,
    categoria: categoria.eletronicos,
    estoque: 5
}

var produto2: produto = {
    id: 2,
    nome: "Livro Clean Code",
    preco: 100,
    categoria: categoria.livros,
    estoque: 10,
    desconto: 15
}

var produto3: produto = {
    id: 3,
    nome: "Teclado Mecânico",
    preco: 500,
    categoria: categoria.eletronicos,
    estoque: 0
}

var erro: produto = {
    id: 1,
    nome: "Monitor 4K",
    preco: 2000,
    categoria: categoria.eletronicos,
    estoque: 5
}