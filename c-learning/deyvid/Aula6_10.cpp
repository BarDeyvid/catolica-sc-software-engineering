/*
10) Faca um programa que leia um numero inteiro de 1 a 4 e exiba a operacao correspondente:
1 - Soma 2 - Subtracao 3 - Multiplicacao 4 - Divisao
Apos exibir o nome da operacao, o programa deve informar uma breve descricao
"Soma: operacao de adicao entre dois valores"
Caso o usuario digite um valor diferente, o programa deve exibir "Opcao Invalida"
*/

#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int num;
    printf("Digite um numero de 1 a 4: ");
    scanf("%i", &num);
    fflush(stdin);
    switch(num) {
        case 1:
            printf("Soma: operacao de adicao entre dois valores\n");
            break;
        case 2:
            printf("Subtracao: operacao de subtracao entre dois valores\n");
            break;
        case 3:
            printf("Multiplicacao: operacao de multiplicacao entre dois valores\n");
            break;
        case 4:
            printf("Divisao: operacao de divisao entre dois valores\n");
            break;
        default:
            printf("Opcao Invalida\n");
    }
}