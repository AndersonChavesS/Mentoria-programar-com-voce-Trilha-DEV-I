var pessoa = [];
var idade = [];
var indice = 0;

for(var i = 1;i <= 5;i++){
    var nome = String(prompt("Informe o nome da "+i+"ª pessoa: "));
    pessoa.push(nome);
    var id = parseInt(prompt("Informe a idade de "+nome+": "));
    idade.push(id);
    alert("Pessoa(s): "+pessoa+"\nIdade(s): "+idade);
}
var maior = 0
for(j = 1;j < idade.length;j++){
    if(idade[j] > idade[maior]){
        indice = j;
    }
}
console.log("A pessoa de maior idade: "+pessoa[indice]);