/*
4) Faca um programa que leia a idade de quatro alunos, calcule a media das idades e apresente a mensagem
turma jovem se a media for menor que 25, adulta se estiver entre 25 a 40 anos e idosa se for maior que 40 anos
*/

#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int idade1, idade2, idade3, idade4, media;

    printf("Digite a primeira idade: ");
    scanf("%i", &idade1);
    fflush(stdin);

    printf("Digite a segunda idade: ");
    scanf("%i", &idade2);
    fflush(stdin);

    printf("Digite a terceira idade: ");
    scanf("%i", &idade3);
    fflush(stdin);

    printf("Digite a quarta idade: ");
    scanf("%i", &idade4);
    fflush(stdin);

    media = (float)(idade1 + idade2 + idade3 + idade4)/4;

    if (media < 25) {
        printf("Turma jovem com media %.2f \n", media);
    } else if (media >= 25 && media <= 40) {
        printf("Turma adulta com media %.2f \n", media);
    } else {
        printf("Turma idosa com media %.2f \n", media);
    }
}