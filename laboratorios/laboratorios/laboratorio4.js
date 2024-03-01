var tempo = parseFloat(prompt("Informe o tempo gasto na viagem: "));
var velocidadeMedia = parseInt(prompt("Qual foi a velocidade média do veículo em km/h: "));
var distancia = parseFloat(velocidadeMedia/tempo);
var consumoVeiculo = parseInt(prompt("Qual é o consumo do veículo em km/l: "));
var precoCombustivel = parseFloat(prompt("Qual é o valor do combustível utilizado: R$"));
var combustivelGasto = parseFloat((precoCombustivel/consumoVeiculo)*distancia);
var totalGasto = parseFloat(combustivelGasto * precoCombustivel);
alert("Combustível gasto: "+combustivelGasto.toFixed(2)+" litros\nPreço do combustível: R$"+precoCombustivel.toFixed(2)+"\nTotal gasto: R$"+totalGasto.toFixed(2));