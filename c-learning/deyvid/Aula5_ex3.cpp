#include <stdio.h>
#include <stdlib.h>

int main(void) {
    char letra;

    printf("Digite a Letra: ");
    scanf("%c", &letra);
    fflush(stdin);

    if (letra == 'F' || letra == 'f') {
        printf("O Sexo e feminino \n");
    } else if (letra == 'M' || letra == 'm') {
        printf("O Sexo e Masculino \n");
    } else {
        printf("O Sexo e invalido \n");
    }
}