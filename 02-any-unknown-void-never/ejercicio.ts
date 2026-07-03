// 02 · any, unknown, void y never
//
// Completar cada TODO, del 1 (más simple) al 6 (más completo).
// Correr `npm test` y dejar todo en verde.

// 1. `entrada` llega de afuera y está tipada como `any`, lo que apaga el
//    chequeo de tipos. Cambiar su tipo a `unknown`.
export let entrada: any = "42";

// Estado del módulo, usado por los ejercicios de abajo.
export const historial: string[] = [];
export let ultimaInspeccion: unknown = null;

// 2. `registrar` agrega el mensaje al historial y no devuelve ningún valor.
//    El tipo de retorno está mal anotado: corregirlo.
export function registrar(mensaje: string): string {
  historial.push(mensaje);
}

// 3. `fallar` siempre lanza un error: nunca devuelve. Cambiar el tipo de retorno
//    por el que representa "esto nunca retorna".
export function fallar(mensaje: string): void {
  throw new Error(mensaje);
}

// 4. `nuncaTermina` tiene un bucle infinito: tampoco retorna nunca. Anotar el
//    tipo de retorno correcto.
export function nuncaTermina(): void {
  while (true) {}
}

// 5. `inspeccionar` recibe un valor de tipo desconocido, lo guarda en
//    `ultimaInspeccion` y no devuelve nada. Anotar el parámetro (`unknown`) y el
//    tipo de retorno.
export function inspeccionar(valor: any): string {
  ultimaInspeccion = valor;
}

// 6. `registrarVarias` agrega `mensaje` al historial `veces` veces, y no
//    devuelve nada. Anotar el retorno e implementar el bucle.
export function registrarVarias(mensaje: string, veces: number): string {
  historial.push(mensaje);
}
