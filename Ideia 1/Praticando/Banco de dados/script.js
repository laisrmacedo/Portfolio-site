//Tipo de Cadastro
let tipoCadastro = document.getElementsByName("tipo-cadastro");
let checar1 = document.querySelector('#cadastro-produto');
let checar2 = document.querySelector('#cadastro-cliente');
let containerCadastro = document.querySelector('.area-cadastro')

function checar(){
    if(tipoCadastro[0].checked == true){
        checar1.classList.remove("ocultar");
        checar2.classList.add("ocultar");
        containerCadastro.classList.add("ocultar");
    } else {
        checar2.classList.remove("ocultar");
        checar1.classList.add("ocultar");
        containerCadastro.classList.add("ocultar");
    }
}

//Numero aleatorio
let codigo = document.querySelector('#codigo');
let clickCodigo = document.querySelector('#clickCodigo');

function novoCodigo(event){
    gerarNum(event.target.dataset.click);
    codigo.value = `${gerarNum(1000, 9999)}`;
}

function gerarNum(min, max){
    return Math.trunc(Math.random() * (max - min) + min);
}

//Voltar
function voltarProduto(event){
    voltarInicio(event.target.dataset.click)
}

function voltarInicio(){
    containerCadastro.classList.remove("ocultar");
    checar1.classList.add("ocultar");
    checar2.classList.add("ocultar");
}

//Cadastrar produto

function cadastrarProduto(event){
    let descricao = document.querySelector('#descricao').value;
    let codigoGerado = document.querySelector('#codigo').value;
    let dataCompra = document.querySelector('#data-compra').value;
    let qEstoque = document.querySelector('#estoque').value;
    let valor = document.querySelector('#preco').value;

    class criarProduto {
        constructor(descricao, codigoGerado, dataCompra){
            this.descricao = descricao;
            this.codigoGerado = codigoGerado;
            this.dataCompra = dataCompra;
            this.qEstoque = qEstoque;
            this.valor = valor;
        }
    }

    new criarProduto(event.target.dataset.click);
    let produto = new criarProduto(descricao,codigoGerado,dataCompra,qEstoque,valor);

    window.localStorage.setItem(codigoGerado, JSON.stringify(produto));

    let tDescricao = document.querySelector('.iDescricao');
    let tCodigo = document.querySelector('.iCodigo');
    let tData = document.querySelector('.iData');
    let tEstoque = document.querySelector('.iEstoque');
    let tPreco = document.querySelector('.iPreco');

    let esconderTabela = document.querySelector('.lista-produtos');
    
    let objProduto = window.localStorage.getItem(codigoGerado);
    let objItem = JSON.parse(objProduto); 
    
    criarTabela(event.target.dataset.click);
    
    function criarTabela(){
        esconderTabela.classList.remove("ocultar")

        tDescricao.innerHTML =  `${objItem.descricao}`;
        tCodigo.innerHTML =  `${objItem.codigoGerado}`;
        tData.innerHTML =  `${objItem.dataCompra}`;
        tEstoque.innerHTML =  `${objItem.qEstoque}`;
        tPreco.innerHTML =  `${objItem.valor}`;
    }
}

function logThis(){
    this.desc = "logger";
    console.log(this);
}

