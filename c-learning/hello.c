#include <stdio.h> // General Input/Output Operations
#include <string.h> // String Manipulation
#include <stdlib.h> // General utility tasks
#include <unistd.h> // code -> system operation


#define ANSI_COLOR_RED     "\x1b[31m"
#define ANSI_COLOR_GREEN   "\x1b[32m"
#define ANSI_COLOR_CYAN    "\x1b[36m"
#define ANSI_COLOR_RESET   "\x1b[0m"

void print_header() {
    printf("----------------------------------\n");
    // %-15s means "Left-aligned string, 15 chars wide"
    printf("%-15s | %-15s\n", "COMMAND", "DESCRIPTION");
    printf("----------------------------------\n");
    printf("%-15s | %-15s\n", "exit", "Closes shell");
    printf("%-15s | %-15s\n", "help", "Shows this menu");
    printf("----------------------------------\n");
}


void logging(char text, char color) {
}

void print(char *text, char *color) {
    if (strcmp(color, "red") == 0) {
        printf("%s%s%s\n", ANSI_COLOR_RED, text, ANSI_COLOR_RESET);
    } else if (strcmp(color, "green")){
        printf("%s%s%s\n", ANSI_COLOR_GREEN, text, ANSI_COLOR_RESET);
    } else if (strcmp(color, "cyan")) {
        printf("%s%s%s\n", ANSI_COLOR_CYAN, text, ANSI_COLOR_RESET);
    }
}

int main() {
    char name[50];
    print_header();
    while(1) {
        print("Enter your name: ", "red");
        print("Enter your name: ", "green");
        print("Enter your name: ", "cyan");
        fgets(name, 50, stdin);
        name[strcspn(name, "\n")] = 0;
        if (strcmp(name, "exit") == 0) {
            printf("User choose to exit \n");
            exit(0);
        }
        printf("Hello, %s \n", name);
    }
    return 0;
}