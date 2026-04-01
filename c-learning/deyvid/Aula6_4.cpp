/*
4) Faca um programa que leia tres notas de um aluno, 
calcule a media e apresente aprovado se a media for maior ou igual a 7, 
reprovado se a media for menor que 7 e aprovado com distincao se a media for igual a 10
*/

#include <stdio.h>
#include <stdlib.h>

int main(void) {
    float nota1, nota2, nota3, media;

    printf("Digite a primeira nota: ");
    scanf("%f", &nota1);
    fflush(stdin);

    printf("Digite a segunda nota: ");
    scanf("%f", &nota2);
    fflush(stdin);

    printf("Digite a terceira nota: ");
    scanf("%f", &nota3);
    fflush(stdin);

    media = (nota1 + nota2 + nota3) / 3;

    if (media == 10) {
        printf("Aprovado com distincao e media %.2f \n", media);
    } else if (media >= 7 && media < 10) {
        printf("Aprovado com media %.2f \n", media);
    } else if (media < 7 && media >= 0) {
        printf("Reprovado com media %.2f \n", media);
    } else {
        printf("Valor invalido \n");
    }
}