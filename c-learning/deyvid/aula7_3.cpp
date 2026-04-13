/* Construa um programa que solicite dois numeros inteiros ao usuario e exiba, na tela, todos os numeros inteiros que estao no intervalo entre eles. */

#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int num1, num2;
    printf("Digite o primeiro numero inteiro: ");
    scanf("%d", &num1);
    printf("Digite o segundo numero inteiro: ");
    scanf("%d", &num2);

    printf("Numeros inteiros entre %d e %d:\n", num1, num2);
    for(int i = num1 + 1; i < num2; i++) {
        printf("%d\n", i);
    }
    
    return 0;
}