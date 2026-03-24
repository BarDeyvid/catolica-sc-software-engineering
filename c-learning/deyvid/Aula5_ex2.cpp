#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int numero;

    printf("Digite o Numero: ");
    scanf("%i", &numero);
    fflush(stdin);

    if (numero < 0) {
        printf("O valor e negativo \n");
    } else if (numero > 0) {
        printf("O valor e positivo \n");
    } else {
        printf("O valor e neutro \n");
    }
}