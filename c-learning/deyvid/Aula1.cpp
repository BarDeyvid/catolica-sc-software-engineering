#include <stdio.h>
#include <stdlib.h>

int primeiro_trabalho(void) {
	char nome[40] = "Deyvid";
	char endereco[100] = "Willy Bruch";
	char email[50] = "bardeyvid@gmail.com";
	char cpf[15] = "000.000.000-00";
	char rg[10] = "0.000.000";
	float altura = 1.72f;
	printf("\n Nome: %s \n Endereco: %s \n Email: %s \n CPF: %s \n RG: %s \n Altura: %f", nome, endereco, email, cpf, rg, altura);
	return 0;
}

int inputs(void) {
	int idade;
	float altura;
	char letra;
	printf("Digite sua idade: ");
	scanf("%i", &idade);
	fflush(stdin);
	printf("Digite sua altura: ");
	scanf("%f", &altura);
	fflush(stdin);
	printf("Digite sua letra: ");
	scanf("%c", &letra);
	fflush(stdin);
	
	printf("Idade: %i \nAltura: %f \nLetra: %c \n", idade, altura, letra);
	
	return 0;
}

int adivinhar_idade(void) {
	int idade, ano_nascimento;
	int ano_atual = 2025;
	printf("Qual a sua Idade?: ");
	scanf("%i", &idade);
	ano_nascimento = ano_atual - idade;
	printf("Voce nasceu em: %i \n", ano_nascimento);
	return 0;	
}

int main(void) {
	int opcao;
	printf("Boa noite Manfred \n\tSegue Primeiro Trabalho Abaixo: \n");
	while(1) {
		printf("Selecione a opcao (Opcao 1: Print dados pessoas, Opcao 2: Input dados basicos, Opcao 3: Adivinhar Idade, Opcao 4: Sair): ");
		scanf("%i", &opcao);
		fflush(stdin);
		if (opcao == 1 ) {
			primeiro_trabalho();
			printf("\n");
		} else if (opcao == 2) {
			inputs();
		} else if (opcao == 3) {
			adivinhar_idade();
		} else if (opcao == 4){
			exit(0);
		}
	}
	return 0;
}
