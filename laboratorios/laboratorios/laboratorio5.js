var capitalInicial = parseFloat(prompt("Informe o valor a ser depositado: "));
var periodoRendimento = parseInt(prompt("Informe o périodo à simular o rendimento: "));
var txJurosMes = parseFloat((capitalInicial * 0.5/100)* periodoRendimento);
var rendimentoTotal = parseFloat(capitalInicial + txJurosMes);
alert("Capital Inicial: R$"+capitalInicial.toFixed(2)+"\nPeríodo do rendimento(meses): "+periodoRendimento+"\nTaxa de Juros Aplicada: 0,5%/mes\nRendimento Anual: R$"+txJurosMes.toFixed(2)+"\nRendimento total no período: R$"+rendimentoTotal.toFixed(2));