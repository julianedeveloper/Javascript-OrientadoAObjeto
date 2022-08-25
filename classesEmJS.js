 //Usando como exemplo a sua classe, vou manter os mesmos métodos, definir as três propriedades
//e adicionalas no constructor.
export class ContaCorrenteNova {
    agencia;
    cliente;
    saldo = 0;
  
    sacar(valor) {
      if (this._saldo >= valor) {
        this._saldo -= valor;
        console.log(this._saldo);
        console.log("Saque efetuado com sucesso.");
      } else {
        console.log("Transação indisponível no momento.");
      }
      return valor;
    }
    depositar(valor) {
      if (valor <= 0) {
        return;
      }
      this._saldo += valor;
    }
    transferir(valor, conta) {
      const valorSacado = this.sacar(valor);
      conta.depositar(valorSacado);
      conta.cidade = "São Paulo";
    }
    //Essa função será chamada assim que você declarar uma nova instancia da classe ContaCorrenteNova
    constructor(agencia, cliente){
      //Nas duas linhas abaixo, definimos as propridades do nosso objeto de acordo com os valores
      //passados através dos parametors entre ().
      this.agencia = agencia;
      this.cliente = cliente;
    }
  };

//Para criarmos uma nova corrente, fazemos em uma só linha.
let novaConta = new ContaCorrenteNova('Itaú', 'Ricardo Maravilha Da Silva.com');
console.log(novaConta);

//Há mais alguns erros e abstrações desnecessárias na hora de declarar os métodos da sua classe.
//Aqui vai um exemplo simples:

export class ContaCorrenteNova2 {
    agencia;
    cliente;
    saldo = 0;
  
    sacar(valor) {
      if (this.saldo >= valor) {
        this.saldo -= valor;
        console.log(this.saldo);
        console.log("Saque efetuado com sucesso. Seu novo saldo é: " + this.saldo);
      } else {
        console.log("Transação indisponível no momento.");
      }
      return valor;
    }

    constructor(agencia, cliente){
      this.agencia = agencia;
      this.cliente = cliente;
    }
  };

  let contaNova2 = new ContaCorrenteNova2('Itaú', 'Ricardo');
  //invoca-se o método assim:
  contaNova2.sacar(10);
  


  