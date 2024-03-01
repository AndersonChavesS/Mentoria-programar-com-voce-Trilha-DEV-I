var contador = 0;
var soma = 0;
var numero= 0;
numero = parseInt(prompt("Digite um número: "));
while(numero != 0){
    soma += numero;
    contador++;
    numero = parseInt(prompt("Digite um número: "));
}