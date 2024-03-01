var num1 = parseInt(prompt("Informe o 1º número: "));
var num2 = parseInt(prompt("Informe o 2º número: "));
if(num1 > num2){
    alert("O "+num1+" é maior que "+num2)
}else if(num2 > num1){
    alert("O "+num2+" é maior que "+num1)
}else{
    alert("Os números são iguais.")
}