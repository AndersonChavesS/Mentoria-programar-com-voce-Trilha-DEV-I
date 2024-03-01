var num = parseInt(prompt("Digite um número para calcular seu fatorial: "));
if(num === 0 || num === 1){
    var fatorial = 1;
    alert(num+"! = "+fatorial);
}else if(num >= 2){
    var fatorial = 1;
    for(var i = 1;i <= num;i++){
       fatorial *= i;               
    }alert(num+"! = "+fatorial);
}
