/*
8) Faca um programa que leia um numero de 1 a 7 e exiba o dia correspondente da semana, conforme abaixo:
1 - Domingo 2 - Segunda-feira 3 - Terca-feira 4 - Quarta-feira 5 - Quinta-feoira 6 - Sexta Feira 7 - Sabado
*/

#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int num;

    printf("Digite o dia da semana: ");
    scanf("%i", &num);
    fflush(stdin);
    switch(num) {
        case 1:
            printf("Domingo \n");
            break;
        case 2:
            printf("Segunda-feira \n");
            break;
        case 3:
            printf("Terca-feira \n");
            break;
        case 4:
            printf("Quarta-feira \n");
            break;
        case 5:
            printf("Quinta-feira \n");
            break;
        case 6:
            printf("Sexta-feira \n");
            break;
        case 7:
            printf("Sabado \n");
            break;
        default:
            printf("Dia invalido \n");        
    }
}