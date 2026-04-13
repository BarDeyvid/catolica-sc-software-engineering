/* Construa um programa que leia dez numeros inteiros e determine qual e o maior valor e o menor valor informado. Ao final, o programa deve calcular e mostrar a diferenca entre eles. */

#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int numeros[10];
    int maior, menor;

    printf("Digite 10 numeros inteiros:\n");
    for(int i = 0; i < 10; i++) {
        printf("Numero %d: ", i + 1);
        scanf("%d", &numeros[i]);
    }

    maior = menor = numeros[0];

    for(int i = 1; i < 10; i++) {
        if(numeros[i] > maior) {
            maior = numeros[i];
        }
        if(numeros[i] < menor) {
            menor = numeros[i];
          }
    }

    int diferenca = maior - menor;

    printf("Maior valor: %d\n", maior);
    printf("Menor valor: %d\n", menor);
    printf("Diferenca entre o maior e o menor valor: %d\n", diferenca);

    return 0;
}