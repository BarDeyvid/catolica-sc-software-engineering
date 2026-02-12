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

int file_exists(const char *filename) {
    FILE *file;
    if ((file = fopen(filename, "r"))) {
        fclose(file);
        return 1;
    }
    return 0;
}


void write_to_file(char *text_to_write) {
    FILE *fptr;
    if (file_exists("output.txt")) {
        fptr = fopen("output.txt", "a");
    } else {
        fptr = fopen("output.txt", "w");
    }

    // Check if the file was opened successfully
    if (fptr == NULL) {
        printf("Error opening file for writing!\\n");
        exit(1); // Exit program with an error status
    }

    // Write the string to the file
    fprintf(fptr, "\n");
    fprintf(fptr, "%s", text_to_write);

    // Close the file
    fclose(fptr);

    printf("Data successfully written to output.txt \n");

}

int main() {
    char input[50];
    char *commands[] = {"exit", "help", "pause", "reset"};
    int num_commands = 4;
    print_header();
    while(1) {
        
        print("Enter your name: ", "red");
        print("Enter your name: ", "green");
        print("Enter your name: ", "cyan");
        fgets(input, 50, stdin);
        input[strcspn(input, "\n")] = 0;
        int match_index = -1;
            for (int i = 0; i < num_commands; i++) {
                if (strcmp(input, commands[i]) == 0) {
                    match_index = i;
                    break;
                }
            }

            // 3. Do "X thing" based on the match
            if (match_index == 0) {
                exit(0);
            } else if (match_index == 1) {
                print_header();
            } else {
                printf("Command not recognized.\n");
            }
        printf("Hello, %s \n", input);
        write_to_file(input);
    }
    return 0;
}