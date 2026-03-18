enum categoria{
    eletronicos = "Eletrônicos",
    livros = "Livros",
    vestuarios = "Vestuário"
};

interface produto{
    id: Number;
    nome: String;
    preco: Number;
    categoria: categoria;
};

interface itemCarrinho{
    produto: produto;
    quantidade: number;
}

function adicionarAoCarrinho(produto:produto, quantidade:number):String{
    if(quantidade <)
}