numeros = [];
do {
  var num = parseInt(prompt("Digite um número: "));
  numeros.push(num);
  alert("Números armazenados: " + numeros);
  var contagemNum = numeros.length;
  var totalNum = contagemNum - 1;
} while (num > 0);
alert("Foram contabilizados " + totalNum + " números");
