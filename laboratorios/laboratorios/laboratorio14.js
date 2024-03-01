var candidato = 0;
var t13 = 0;
var t43 = 0;
var t45 = 0;
var t50 = 0;
var tnulo = 0;
var opcaoNulo = "";
var opcaoConfirma = "";
var continuarVotando = "";
do{
    opcaoNulo = "";
    opcaoConfirma = "";
    candidato = parseInt(prompt("Digite o número do candidato (13; 43; 45; 50): "));
    switch(candidato){
        case 13: alert("13 - Dilma - PT");
        opcaoConfirma = String(prompt("Deseja confirmar seu voto? Resp: "));
        if(opcaoConfirma == 'S' || opcaoConfirma == 's'){
            alert("Voto computado com sucesso");
            t13++;
        }else{
            alert("Voto cancelado!");
        }
        break;
        case 43: alert("43 -Eduardo Campos - PSB");
        opcaoConfirma = String(prompt("Deseja confirmar seu voto? Resp: "));
        if(opcaoConfirma == 'S' || opcaoConfirma == 's'){
            alert("Voto computado com sucesso");
            t43++;
        }else{
            alert("Voto cancelado!");
        }
        break;
        case 45: alert("45 -Aécio Neves - PSDB");
        opcaoConfirma = String(prompt("Deseja confirmar seu voto? Resp: "));
        if(opcaoConfirma == 'S' || opcaoConfirma == 's'){
            alert("Voto computado com sucesso");
            t45++;
        }else{
            alert("Voto cancelado!");
        }
        break;
        case 50: alert("50 -Fernando Gabeira - PV");
        opcaoConfirma = String(prompt("Deseja confirmar seu voto? Resp: "));
        if(opcaoConfirma == 'S' || opcaoConfirma == 's'){
            alert("Voto computado com sucesso");
            t50++;
        }else{
            alert("Voto cancelado!");
        }
        break;
        default:
            printf("\nVoto Nulo: ");
            opcaoConfirma = String(prompt("Deseja confirmar seu voto? Resp: "));
            if(opcaoConfirma == 'S' || opcaoConfirma == 's'){
                alert("Voto computado com sucesso");
                tnulo++;
            }else{
                alert("Voto cancelado!");
            }
    }
    continuarVotando = String(prompt("Continuar votando? Resp: "));    
}while(continuarVotando == 'S' || continuarVotando == 's');
alert("Candidato 13: "+t13+"\nCandidato 43: "+t43+"\nCandidato 45: "+t45+"\nCandidato 50: "+t50+"Votos Nulo: "+tnulo);
alert("FIM!")
