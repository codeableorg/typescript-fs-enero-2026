// 02 · any, unknown, void y never
//
// Completar cada TODO. Correr `npm test` y dejar todo en verde.

// 1. `entrada` llega de afuera y está tipada como `any`, lo que apaga el
//    chequeo de tipos. Cambiar su tipo a `unknown`.
export let entrada: any = "42";

// 2. `registrar` agrega el mensaje al historial y no devuelve ningún valor.
//    El tipo de retorno está mal anotado: corregirlo.
export const historial: string[] = [];
export function registrar(mensaje: string): string {
  historial.push(mensaje);
}

// 3. `fallar` siempre lanza un error: nunca devuelve. Cambiar el tipo de retorno
//    por el que representa "esto nunca retorna".
export function fallar(mensaje: string): void {
  throw new Error(mensaje);
}
