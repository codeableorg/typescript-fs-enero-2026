// 01 · Tipos e inferencia
//
// Completar cada TODO, del 1 (más simple) al 6 (más completo).
// Correr `npm test` y dejar todo en verde.

// 1. Anotar el tipo correcto de `titulo` (un texto).
export let titulo: unknown = "Curso de TypeScript";

// 2. Anotar el tipo correcto de `anio` (un número) y de `enCurso` (un booleano).
export let anio: unknown = 2026;
export let enCurso: unknown = true;

// 3. Implementar `saludar`: recibe un nombre y devuelve "Hola, <nombre>".
export function saludar(nombre: string): string {
  return nombre; // TODO: devolver "Hola, <nombre>"
}

// 4. Anotar el parámetro y el retorno de `doble` e implementarla para que
//    devuelva el doble del número.
export function doble(n: unknown): unknown {
  return n; // TODO
}

// 5. Implementar `repetir`: devuelve `texto` repetido `veces` veces
//    (ej. "ab" repetido 3 veces es "ababab").
export function repetir(texto: string, veces: number): string {
  return texto + veces; // TODO
}

// 6. Implementar `resumen`: devuelve "<nombre>, <edad> años, <estado>", donde
//    `estado` es "activo" si `activo` es true, o "inactivo" si es false.
export function resumen(
  nombre: string,
  edad: number,
  activo: boolean,
): string {
  return `${nombre} ${edad} ${activo}`; // TODO
}
