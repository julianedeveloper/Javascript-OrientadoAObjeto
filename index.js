import {Cliente} from "./Cliente.js"; //aqui eu importei meu módulo cliente para compilar aqui
import {ContaCorrente} from "./ContaCorrente.js" // aqui eu importo o módulo conta corrente

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice",88822233309);

const conta1 = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
//movimentação da conta
conta1.sacar(50); //sacando 50,00 reais da conta1
conta1.depositar(500); //depositando 500 reais na conta1
conta1.transferir(valor, conta2); //transferir da conta1 o valor definido na let valor para a conta2

console.log(ContaCorrente.numeroDeContas);
