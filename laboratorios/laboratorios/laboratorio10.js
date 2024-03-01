var candidato1 = parseInt(13);
var candidato2 = parseInt(45);
var candidato3 = parseInt(43);
var candidato4 = parseInt(50);
var nulo = parseInt(1);
var branco= parseInt(2);
var voto = parseInt(prompt("Digite seu voto: "));
switch(voto){
    case 13:
        alert("Candidato 1");
        var confirma = prompt("Confirma seu voto? 'S/N'");
        if(confirma == "S"){
            alert("Voto computado com sucesso");
        }else{
            alert("VOTO CANCELADO!");
        }
        break;
    case 45:
        alert("Candidato 2");
        var confirma = prompt("Confirma seu voto? 'S/N'");
        if(confirma == "S"){
            alert("Voto computado com sucesso");
        }else{
            alert("VOTO CANCELADO!");
        }
        break;
    case 43:
        alert("Candidato 3");
        var confirma = prompt("Confirma seu voto? 'S/N'");
        if(confirma == "S"){
            alert("Voto computado com sucesso");
        }else{
            alert("VOTO CANCELADO!");
        }
        break;
    case 50:
        alert("Candidato 4");
        var confirma = prompt("Confirma seu voto? 'S/N'");
        if(confirma == "S"){
            alert("Voto computado com sucesso")
        }else{
            alert("VOTO CANCELADO!");
        }
        break;
    case 1:
        alert("Voto Nulo");
        var confirma = prompt("Confirma seu voto? 'S/N'");
        if(confirma == "S"){
            alert("Voto computado com sucesso");
        }else{
            alert("VOTO CANCELADO!");
        }
        break;
    case 2:
        alert("Voto Branco");
        var confirma = prompt("Confirma seu voto? 'S/N'");
        if(confirma == "S"){
            alert("Voto computado com sucesso");
        }else{
            alert("VOTO CANCELADO!");
        }
        break;
    
}