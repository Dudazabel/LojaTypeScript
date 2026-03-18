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
    estoque: number;
    desconto ?: number;
};

interface itemCarrinho{
    produto: produto;
    quantidade: number;
}

const carrinho: itemCarrinho[]

function adicionarAoCarrinho(produto:produto, quantidade:number):String{
    if(quantidade < 1 ){
        quantidade == 1;
    }

    if(produto.estoque < 1){
        return "Erro ao adicionar produto no carrinho"
    }else{
        
    }
}