var nota1 = parseFloat(prompt("Informe a 1ª nota: "));
var nota2 = parseFloat(prompt("Informe a 2ª nota: "));
var nota3 = parseFloat(prompt("Informe a 3ª nota: "));
var media = parseFloat(((nota1 * 3) + (nota2 * 3) + (nota3 * 4))/10);
if(media >= 6.0){
    alert("Média do aluno: "+media.toFixed(2)+"\nAluno 'APROVADO'");
}else{
    alert("Média do aluno: "+media.toFixed(2)+"\nAluno 'REPROVADO'");
}