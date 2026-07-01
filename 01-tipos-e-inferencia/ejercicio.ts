// 01 · Tipos e inferencia
//
// Completar cada TODO. Correr `npm test` y dejar todo en verde.

// 1. Reemplazar `unknown` por el tipo correcto de cada valor.
export const titulo: unknown = "Curso de TypeScript";
export const anio: unknown = 2026;
export const enCurso: unknown = true;

// 2. Implementar `saludar`: recibe un nombre y devuelve "Hola, <nombre>".
export function saludar(nombre: string): string {
  return nombre; // TODO: devolver "Hola, <nombre>"
}

// 3. El parámetro y el retorno están anotados como `unknown`. Anotar el tipo
//    correcto e implementar la función para que devuelva el doble del número.
export function doble(n: unknown): unknown {
  return n; // TODO
}
