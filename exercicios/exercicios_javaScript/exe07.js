var opcao = parseInt(
  prompt(
    "OPÇÕES:\n1. Selecione 5 números para verificar a soma entre eles:\n2. Selecione 3 números para verificar o produto entre eles:\n3. Sair do programa"
  )
);
switch (opcao) {
  case 1:
    var numeros = [];
    for (var i = 0; i < 5; i++) {
      var num = parseInt(prompt("Digite um número:"));
      numeros.push(num);
      alert("Números selecionados: " + numeros);
    }
    var soma = numeros[0] + numeros[1] + numeros[2] + numeros[3] + numeros[4];
    alert(
      "SOMA: " +
        numeros[0] +
        "+" +
        numeros[1] +
        "+" +
        numeros[2] +
        "+" +
        numeros[3] +
        "+" +
        numeros[4] +
        "=" +
        soma
    );
    break;
  case 2:
    var numeros = [];
    for (var i = 0; i < 3; i++) {
      var num = parseInt(prompt("Digite um número:"));
      numeros.push(num);
      alert("Números selecionados: " + numeros);
    }
    var mult = numeros[0] * numeros[1] * numeros[2];
    alert(
      "Multiplicação: " +
        numeros[0] +
        "x" +
        numeros[1] +
        "x" +
        numeros[2] +
        "=" +
        mult
    );
    break;
  case 3:
    alert("PROGRAMA ENCERRADO!");
    break;
}
