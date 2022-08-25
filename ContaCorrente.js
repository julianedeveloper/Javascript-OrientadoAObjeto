import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  static numeroDeContas = 0; // static é um atributo que tornou o numeroDeContas uma propriedade da minha class ContaCorrente e não só das instâncias (Ricardo e Alice no caso).
  agencia;
  _cliente; // cliente é um campo protegido, por isso o underline na frente.
  _saldo = 0; // saldo é um campo protegido também.

  set cliente(novoValor) { // set vai pegar o novoValor recebido em cliente
    if (novoValor instanceof Cliente) { // se essse novoValor for um dos que pertencem a instância de (instanceof) da class Cliente
      this._cliente = novoValor; // vai pegar esse novoValor e atribuir/ guardar em um campo protegido.
    }
  }
  get cliente() { //só nesse caso, de receber um cliente,
    return this._cliente; //retorna o conteúdo protegido 
  }
  get saldo()  { // pega o saldo, 
    return this._saldo; // e guarda/atribui nesse campo _saldo.
  }
  constructor(agencia, cliente){ //quando a const devida, receber uma agência e um cliente,
    this.agencia = agencia; // pega esta.agencia e atribui ao campo agencia,
    this.cliente = cliente; // e pega este.cliente e atribui ao campo cliente.
    ContaCorrente.numeroDeContas += 1; //exiba o numero total de contas da class ContaCorrente.
  }
  sacar(valor) { //a função é um método
    if (this._saldo >= valor) { // esse if e o else são os comportamentos do método
      this._saldo -= valor; // conta corrente é uma class genérica então dizer que busca pela conta corrente apenas do Ricardo é um equívoco. Por isso o uso do this, porque aplica a conta em que estamos trabalhando no momento.
      //console.log('Saque efetuado com sucesso.')
      return valor;
    }
  }
  depositar(valor) { // esse método vai receber um valor

    if (valor <= 0) { //se o valor recebido for menor ou igual a zero
      return; // retorna esse valor
    }
    this._saldo += valor; // e então este saldo protegido, vai ter somado o valor em questão
  }
  transferir(valor, conta) { // esse método vai receber um valor
    const valorSacado = this.sacar(valor); // o valorSacado é referente ao valor desse saque
    conta.depositar(valorSacado); // a conta citada como parâmetro vai receber como depósito o valorSacado
    conta.cidade = 'São Paulo'; //a cidade atribuida à conta será São Paulo
  }
}
