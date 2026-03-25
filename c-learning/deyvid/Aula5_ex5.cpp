#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main(void) {
    int numero;

    printf("Digite o Numero: ");
    scanf("%i", &numero);
    fflush(stdin);

    if ((numero - (int)numero) == 0) {
        printf("O Numero e inteiro \n");
    } else {
        printf("O numero e quebrado \n");
    }
}