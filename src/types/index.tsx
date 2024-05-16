export type idPerfil = 1 | 2 | 3 | 4 | 5 | 6;

export interface ErrorException extends Error {
  errno?: number;
  code?: string;
  path?: string;
  syscall?: string;
  stack?: string;
}
