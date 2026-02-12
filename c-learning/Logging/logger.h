#ifndef LOGGER_H
#define LOGGER_H

#include <stdio.h>
#include <stdlib.h>


typedef struct 
{
    FILE *file;
    int log_level;
} Logger;

Logger* logger_init(const char *filename);
void logger_destroy(Logger *l);

void log_info(Logger *l, const char *message);
void log_error(Logger *l, const char *message);
void log_debug(Logger *l, const char *message);

#endif