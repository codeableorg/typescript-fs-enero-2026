// 13 · Type guards personalizados
//
// Completar cada TODO, del 1 (más simple) al 6 (más completo).
// Correr `npm test` y dejar todo en verde.

export type Pez = { nombre: string; nada: boolean };
export type Ave = { nombre: string; vuela: boolean };
export type Usuario = { id: number; nombre: string };

// 1. `esTexto` comprueba bien en tiempo de ejecución, pero devuelve un boolean
//    "mudo": TypeScript no conecta el `true` con el tipo. Cambiar el retorno
//    por el predicado `valor is string`.
export function esTexto(valor: string | number): boolean {
  return typeof valor === "string";
}

// 2. `esPez` distingue un Pez de un Ave. Anotar el retorno como predicado
//    (`mascota is Pez`) e implementar usando `in`.
export function esPez(mascota: Pez | Ave): boolean {
  return "nombre" in mascota; // TODO: comprobar lo que distingue a un Pez
}

// 3. `movimiento` devuelve "nada" si la mascota es un pez, o "vuela" si es un
//    ave. Implementar usando `esPez` (el guard del ejercicio 2).
export function movimiento(mascota: Pez | Ave): string {
  return mascota.nombre; // TODO
}

// 4. `assertEsTexto` lanza un error si el valor no es un texto. Después de
//    llamarla, TypeScript debe saber que el valor es un string: anotar el
//    retorno como `asserts valor is string`.
export function assertEsTexto(valor: unknown): void {
  if (typeof valor !== "string") {
    throw new Error("No es un texto");
  }
}

// 5. `gritar` recibe un valor desconocido y devuelve el texto en mayúsculas.
//    Implementar usando `assertEsTexto` (sin `if` propio: la aserción corta).
export function gritar(valor: unknown): string {
  return String(valor); // TODO
}

// 6. `esUsuario` valida que un valor desconocido (por ejemplo, la respuesta de
//    una API) tenga la forma de `Usuario`. Anotar el predicado (`valor is
//    Usuario`) e implementar: debe ser un objeto no nulo, con `id` numérico y
//    `nombre` de texto.
export function esUsuario(valor: unknown): boolean {
  return false; // TODO
}
