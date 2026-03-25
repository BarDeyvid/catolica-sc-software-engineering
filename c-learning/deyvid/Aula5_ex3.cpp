#include <stdio.h>
#include <stdlib.h>

int main(void) {
    char letra;

    printf("Digite a Letra: ");
    scanf("%c", &letra);
    fflush(stdin);

    switch (letra)
    {
    case 'f':
        printf("Feminino\n");
        break;
    case 'F':
        printf("Feminino\n");
        break;
    case 'm':
        printf("Masculino\n");
        break;
    case 'M':
        printf("Masculino\n");
        break;
    default:
        break;
    }
}