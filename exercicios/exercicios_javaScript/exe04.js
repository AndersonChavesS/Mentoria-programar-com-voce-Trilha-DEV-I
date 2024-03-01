var numeros = [];
var maior = 0;
var menor = 999999999;
for(var i = 0;i < 5;i++){
    var num = parseInt(prompt("Digite o "+(i+1)+"º número:"));
    numeros.push(num);
    alert(numeros+" , ");
    if(num > maior){
        maior = numeros[i];
    }
    if(num < menor){
        menor = numeros[i];
    }
}
alert("Maior: "+maior+"\nMenor: "+menor);