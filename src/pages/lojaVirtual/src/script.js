// Constantes globais de interação
const alteraBorda1=document.getElementById("trans1");
const alteraBtn1 = document.getElementById("selecionar1");
const alteraBorda2=document.getElementById("trans2");
const alteraBtn2 = document.getElementById("selecionar2");
const valorProduto2 = 25.00;
const valorProduto3 = 1500.00;
const valorCorreios = 40;
const valorTransportadora = 20.00
let alteraTranportadora=0
var qtdEstoque = 100;
var qtdEstoque2 = 100;
var qtdEstoque2 = 5;
var qtdEstoque3 = 5;
let valorTotal = 0;
let valorProduto = 15;
let itensCarrinho = 0;
let qtdProduto = 0;
let qtdProduto2 = 0;
let qtdProduto3 = 0;
let carrinho = 0
let imgAlert;

// fim constantes globais

carregaValores()
    window.onload = function carregaVariáveis(){
    const totalItens = qtdProduto + qtdProduto2 + qtdProduto3;
    carrinho = totalItens <= 1 ? `${totalItens} Item` : `${totalItens} Itens`;
    document.getElementById("qtdItens").innerHTML="0 Item"
    document.getElementById("qtdProduto2").innerHTML="0";
    document.getElementById("qtdProduto3").innerHTML="0";
    document.getElementById("estoque1").innerHTML="0"
    document.getElementById("estoque2").innerHTML="0"
    document.getElementById("qtdEstoque3").innerHTML="0"
    console.log("Teste Ok")
}

function selecionaTransportadora1(){    
    alteraBtn1.classList.add('btnSelecionado');
    alteraBorda1.classList.add('bordaSelecionada')
    alteraBtn2.classList.remove('btnSelecionado');
    alteraBorda2.classList.remove('bordaSelecionada')
    alteraBtn1.textContent="selecionado";
    alteraTranportadora=valorCorreios;
    carregaValores()
}
// Altera CSS da transportadora Selecionada
function selecionaTransportadora2(){
    alteraBtn1.classList.remove('btnSelecionado');
    alteraBorda1.classList.remove('bordaSelecionada')
    alteraBtn2.classList.add('btnSelecionado');
    alteraBorda2.classList.add('bordaSelecionada')
    alteraTranportadora=valorTransportadora;
    carregaValores();
}
// Inicio interage com a quantidade de produtos
function incrementapdt(){
    qtdProduto+=1;
    qtdEstoque-=1;
    carregaValores()
}

function decrementapdt(){
    if (qtdProduto === 0) return;
    qtdProduto-=1;
    qtdEstoque+=1;
    carregaValores();
}

function incrementapdt2(){
    qtdProduto2+=1;
    qtdEstoque2-=1;
    carregaValores()
}

function decrementapdt2(){
    if (qtdProduto2 === 0) return;
    qtdProduto2-=1;
    qtdEstoque2+=1;
    carregaValores();
}
function incrementapdt3(){
    if (qtdEstoque3 ===0) return alert(Image()`Produto fora de estoque`);
    qtdProduto3+=1;
    qtdEstoque3-=1;
    carregaValores()
}

function decrementapdt3(){
    // Verificar este cálculo.
    if (qtdProduto3 === 0 ) return;
    
    qtdProduto3-=1;
    qtdEstoque3+=1;
    carregaValores();
}
// Fim interage com a quantidade de produtos selecionados

function carregaValores(){
//     if (carrinho<2) { carrinho =` ${qtdProduto+qtdProduto2+qtdProduto3} Item`
// }else{
//    carrinho = `${qtdProduto+qtdProduto2+qtdProduto3} Itens`
// }
    const totalItens = qtdProduto + qtdProduto2 + qtdProduto3;
    carrinho = totalItens <= 1 ? `${totalItens} Item` : `${totalItens} Itens`;
    document.getElementsByClassName("totalItem")[0].innerHTML=qtdProduto;
    document.getElementById("qtdProduto2").innerHTML=qtdProduto2;
    document.getElementById("qtdProduto3").innerHTML=qtdProduto3;
    document.getElementById("valorTotal").innerHTML = `${((qtdProduto * valorProduto)+(qtdProduto2 * valorProduto2)+(qtdProduto3 * valorProduto3) + alteraTranportadora).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    document.getElementById("qtdItens").innerHTML=(carrinho)
    // document.getElementById("estoque1").innerHTML=(qtdEstoque);
    document.getElementById("estoque2").innerHTML=(qtdEstoque2);
    document.getElementById("qtdEstoque3").innerHTML=(qtdEstoque3);
}