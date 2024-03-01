var valorAbastecimento = parseFloat(prompt("Informe o valor à abastecer: R$"));
var opcaoAbastecimento = parseInt(prompt("Valor do litro da Gasolina: R$2,30\nValor do litro do Etanol: R$1,40\nPara escolher a opção digite:\nGasolina(1);\nEtanol(2);\nEscolha o combustível: "));
if(opcaoAbastecimento === 1){
    var totalGasolina = parseFloat(valorAbastecimento / 2.30)
    alert("Valor do abastecimento: R$"+valorAbastecimento.toFixed(2)+"\nCombustível: 'GASOLINA'\nQuantidade abastecida: "+totalGasolina.toFixed(1)+" litros")
}else if(opcaoAbastecimento === 2){
    var totalEtanol = parseFloat(valorAbastecimento / 1.40)
    alert("Valor do abastecimento: R$"+valorAbastecimento.toFixed(2)+"\nCombustível: 'ETANOL'\nQuantidade abastecida: "+totalEtanol.toFixed(1)+" litros")
}