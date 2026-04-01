/*
3) Faca um programa que leia um numero inteiro e informe se ele e par ou impar
*/

#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int numero;

    printf("Digite o Numero: ");
    scanf("%i", &numero);
    fflush(stdin);

    if (numero % 2 == 0) {
        printf("O valor e par \n");
    } else {
        printf("O valor e impar \n");
    }
} 