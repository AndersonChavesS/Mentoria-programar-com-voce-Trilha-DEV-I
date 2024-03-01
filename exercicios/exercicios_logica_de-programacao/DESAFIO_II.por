programa
{
	/*DESAFIO II - TRILHA DEV-I
	*/	
	inclua biblioteca Matematica

	funcao inicio()
	{
	    inteiro N1, N2, N3
	    real TEMP1, TEMP2, DLT, RES
	    
	    escreva("Informe o valor de N1: ")
	    leia(N1)
	    escreva("Informe o valor de N2: ")
	    leia(N2)
	    escreva("Informe o valor de N3: ")
	    leia(N3)
	
	    RES = (-N1 + Matematica.raiz((N2 * N2)-(N1 * N3 * 4), 2)/(N1 * 2))
	    
	    escreva("Resultado da equação: ", RES)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 41; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */