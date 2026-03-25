#include <stdio.h>
#include <stdlib.h>

int main(void) {
    char turno;

    printf("Digite a Letra do seu turno: ");
    scanf("%c", &turno);
    fflush(stdin);

    switch (turno)
    {
    case 'm':
        printf("Bom Dia!\n");
        break;
    case 'M':
        printf("Bom Dia!\n");
        break;
    case 'v':
        printf("Boa Tarde!\n");
        break;
    case 'V':
        printf("Boa Tarde!\n");
        break;
    case 'n':
        printf("Boa Noite!\n");
        break;
    case 'N':
        printf("Boa Noite!\n");
        break;
    default:
        break;
    }

}