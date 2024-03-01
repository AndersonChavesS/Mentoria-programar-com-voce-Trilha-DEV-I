var peso = parseFloat(prompt("Infome seu peso(kg): "));
var altura = parseFloat(prompt("Informe sua altura(m)"));
var imc = parseFloat(peso/(altura * altura));
if(imc < 20){
    alert("Peso: "+peso.toFixed(3)+" kg\nAltura: "+altura.toFixed(2)+"m\nIMC: "+imc.toFixed(2)+"\n'ABAIXO DO PESO'");
}else if(imc >= 20 && imc <= 30){
    alert("Peso: "+peso.toFixed(3)+" kg\nAltura: "+altura.toFixed(2)+"m\nIMC: "+imc.toFixed(2)+"\n'PESO IDEAL'");
}else{
    alert("Peso: "+peso.toFixed(3)+" kg\nAltura: "+altura.toFixed(2)+"m\nIMC: "+imc.toFixed(2)+"\n'ACIMA DO PESO'");
}