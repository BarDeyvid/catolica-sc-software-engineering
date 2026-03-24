#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int numero1, numero2;

    printf("Digite o 1 Numero: ");
    scanf("%i", &numero1);
    fflush(stdin);

    printf("Digite o 2 Numero: ");
    scanf("%i", &numero2);
    fflush(stdin);

    if (numero1 > numero2) {
        printf("Numero 1 e o maior = %i\n", numero1);
    } else {
        if (numero2 > numero1) {
            printf("Numero 2 e o maior = %i\n", numero2);
        } else {
        printf("Valores Iguais \n");
    }
    } 
}