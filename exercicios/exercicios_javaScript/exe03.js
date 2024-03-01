var numero = parseInt(prompt("Digite um número para verificar se ele é divisível por 3 e 7: "));
if(numero % 3 === 0 && numero % 7 === 0){
   alert(numero+" é divisível por 3 e 7\nResultado da divisão por 3 = "+numero/3+"\nResultado da divisão por 7 = "+numero/7); 
}else{
    alert(numero+" não é divisível por 3 e 7.")
}