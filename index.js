 class Cliente { //a classe é meu molde, meu objeto
    nome;
    cpf;
    agencia;
    saldo;
}
const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = 'Ricardo'; // o cliente1 é uma instância do meu objeto, aqui eu instanciei meu objeto.
cliente1.cpf = 11122233309;
cliente1.agenciaAgencia = 1001;
cliente1.saldo = 0; 

cliente2.nome = 'Alice';
cliente2.cpf = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0; 

console.log(cliente1);
console.log(cliente2);
