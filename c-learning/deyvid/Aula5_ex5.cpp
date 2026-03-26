#include <stdio.h>
#include <stdlib.h>

int ex_8() {
    int a, b, c, tmp;

    printf("Digite tres valores inteiros: ");
    scanf("%i %i %i", &a, &b, &c);

    if (a > b) {
        tmp = a;
        a = b;
        b = tmp;
    }

    if (a > c) {
        tmp = a;
        a = c;
        c = tmp;
    }

    if (b > c) {
        tmp = b;
        b = c;
        c = tmp;
    }

    printf("Valores em ordem crescente: %i, %i, %i\n", a, b, c);

    return 0;
}

int ex_5() {
    float num;

    printf("Digite um numero: ");
    scanf("%f", &num);

    if (num == (int)num) {
        printf("O numero %.2f e INTEIRO.\n", num);
    } else {
        printf("O numero %.2f e QUEBRADO (decimal).\n", num);
    }

    return 0;
}

int main(void) {
	int opcao;
	printf("Boa noite Manfred \n\tSegue Primeiro Trabalho Abaixo: \n");
	while(1) {
		printf("Selecione a opcao (Opcao 5: Numero inteiro ou quebrado, Opcao 8: Ordenar valores, Opcao 0: Sair): ");
		scanf("%i", &opcao);
		fflush(stdin);
		if (opcao == 5 ) {
			ex_5();
			printf("\n");
		} else if (opcao == 8) {
			ex_8();
		} else if (opcao == 0){
			exit(0);
		}
	}
	return 0;
}
