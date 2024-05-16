//saldo de estoque inicial
estoque = 10;

//variaveis de entrada de dados
const entrada = prompt('Informe o tipo de entrada(1-Compra 2-Venda): ');
const quantidade = Number(prompt('Informe a quantidade: '));

//processamento e saida dos dados
if(entrada === '1'){
  let saldoCompra = quantidade + estoque;
  console.log(`Saldo: ${saldoCompra}`);
} else {
  if(quantidade >= estoque){
    console.log('Saldo Insuficiente.');
  } else {
    let saldoVenda = estoque - quantidade;
    console.log(`Saldo: ${saldoVenda}`)
  }
}