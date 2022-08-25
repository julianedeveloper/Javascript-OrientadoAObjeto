export class Cliente { //a classe é meu molde, meu objeto que tem duas propriedades, nome e cpf a princípio.
  nome;
  _cpf;

  get cpf() { // aqui o método get, vai pegar o dado digitado no campo cpf e colocar ele dentro de um campo
              //protegido (_cpf) automaticamente, á partir do momento em que o user digita o dado.
    return this._cpf;
  }
  constructor(nome, cpf) { // aqui eu estou atribuindo uma ação para o const, para pegar o nome e cpf recebidos e enviá-los automaticamente aos campos nome e cpf.
    this.nome = nome;
    this._cpf = cpf;
  }
}