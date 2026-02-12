#include "logger.h"
#include <time.h>

Logger* logger_init(const char *filename) {
    Logger *l = malloc(sizeof(Logger));
    l->file = fopen(filename, "a"); 
    l->log_level = 0;
    return l;
}

void log_info(Logger *l, const char *message) {
    time_t now = time(NULL);
    char *timestamp = ctime(&now);
    timestamp[24] = '\0';
    fprintf(l->file, "[%s] INFO: %s\n", timestamp, message);
    fflush(l->file);
}

void log_error(Logger *l, const char *message) {
    time_t now = time(NULL);
    char *timestamp = ctime(&now);
    timestamp[24] = '\0';
    fprintf(l->file, "[%s] ERROR: %s\n", timestamp, message);
    fflush(l->file);
}

void log_debug(Logger *l, const char *message) {
    time_t now = time(NULL);
    char *timestamp = ctime(&now);
    timestamp[24] = '\0';
    fprintf(l->file, "[%s] DEBUG: %s\n", timestamp, message);
    fflush(l->file);
}
void logger_destroy(Logger *l) {
    if (l->file) fclose(l->file);
    free(l);
}