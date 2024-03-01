var numero = [];
var i;
var maior = 0;
for(i = 0;i < 3;i++){
    var num = parseInt(prompt("Informe o "+(i+1)+"º número: "));
    numero.push(num);
    alert(numero);
    if(num > maior){
        maior = numero[i];
    }
}
alert("O maior valor: "+maior);