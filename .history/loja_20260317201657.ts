enum categoria{
    eletronicos = "Eletrônicos",
    livros = "Livros",
    vestuarios = "Vestuário"
};

interface Produto{
    id: Number;
    nome: String;
    preco: Number;
    categoria: categoria;
};