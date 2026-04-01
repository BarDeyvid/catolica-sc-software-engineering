/*
9) Faça um programa que implemente uma calculadora simples. O programa deve solicitar dois valores e, em seguida, apresentar o menu abaixo para o usuário escolher a operação desejada:
1 - Soma 2 - Subtracao 3 - Multiplicacao 4 - Divisao 5 - Fim
O programa deve exibir o resultado da operação escolhida. Caso o usuário escolha divisão, deve verificar se o segundo valor é diferente de zero. Caso a opção informada seja inválida, o programa deve exibir uma mensagem de erro.
*/

#include <stdio.h>
#include <stdlib.h>

int main(void) {
    float valor1, valor2;
    int num;
    
    printf("Digite o primeiro valor: ");
    scanf("%f", &valor1);
    fflush(stdin);
    
    printf("Digite o segundo valor: ");
    scanf("%f", &valor2);
    fflush(stdin);
    
    printf("Digite um numero de 1 a 5: ");
    scanf("%i", &num);
    fflush(stdin);
    switch(num) {
        case 1:
            printf("Soma: %.2f + %.2f = %.2f\n", valor1, valor2, valor1 + valor2);
            break;
        case 2:
            printf("Subtracao: %.2f - %.2f = %.2f\n", valor1, valor2, valor1 - valor2);
            break;
        case 3:
            printf("Multiplicacao: %.2f * %.2f = %.2f\n", valor1, valor2, valor1 * valor2);
            break;
        case 4:
            if (valor2 != 0) {
                printf("Divisao: %.2f / %.2f = %.2f\n", valor1, valor2, valor1 / valor2);
            } else {
                printf("Erro: Divisao por zero nao permitida\n");
            }
            break;
        case 5:
            printf("Fim do programa\n");
            break;
        default:
            printf("Opcao Invalida\n");
    }
    return 0;
}