// 03 · Uniones y tipos literales
//
// Completar cada TODO. Correr `npm test` y dejar todo en verde.

// 1. `id` puede ser un texto o un número. Anotar el tipo unión correcto.
export let id: unknown = "abc-123";

// 2. Una talla solo puede ser "sm", "md" o "lg". Anotar el tipo literal unión
//    (más preciso que `string`).
export let talla: string = "md";

// 3. `describir` recibe un valor que puede ser texto o número:
//    - si es texto, devuelve su cantidad de caracteres (`length`);
//    - si es número, devuelve el número multiplicado por 2.
//    Anotar el parámetro como unión e implementar usando `typeof`.
export function describir(valor: any): number {
  return 0; // TODO
}
