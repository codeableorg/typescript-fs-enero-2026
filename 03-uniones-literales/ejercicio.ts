// 03 · Uniones y tipos literales
//
// Completar cada TODO, del 1 (más simple) al 6 (más completo).
// Correr `npm test` y dejar todo en verde.

// 1. `id` puede ser un texto o un número. Anotar el tipo unión correcto.
type ID = string | number;

export let id: ID = "abc-123";

// 2. Una talla solo puede ser "sm", "md" o "lg". Anotar el tipo literal unión
//    (más preciso que `string`).
type tallas = "sm" | "md" | "lg";
export let talla: tallas = "md";

// 3. `describir` recibe un valor que puede ser texto o número:
//    - si es texto, devuelve su cantidad de caracteres (`length`);
//    - si es número, devuelve el número multiplicado por 2.
//    Anotar el parámetro como unión e implementar usando `typeof`.
export function describir(valor: string | number): number {
  if (typeof valor === "string") return valor.length;
  return valor * 2;
}

// 4. `precioTalla` recibe una talla ("sm", "md" o "lg") y devuelve su precio:
//    sm = 10, md = 20, lg = 30. Anotar el parámetro como unión literal e
//    implementar.
export function precioTalla(talla: tallas): number {
  if (talla === "sm") return 10;
  if (talla === "md") return 20;
  return 30;
}

// 5. `formatear` recibe un texto o un número y devuelve un texto:
//    - si es texto, en mayúsculas;
//    - si es número, con un "$" adelante (ej. 5 se convierte en "$5").
//    Anotar el parámetro como unión e implementar usando `typeof`.
export function formatear(valor: string | number): string {
  if (typeof valor === "string") return valor.toUpperCase();
  return `$${valor}`;
}

// 6. `etiqueta` recibe una talla y un booleano `disponible`, y devuelve
//    "<talla> (disponible)" o "<talla> (agotado)". Anotar la talla como unión
//    literal e implementar.
export function etiqueta(talla: tallas, disponible: boolean): string {
  return `${talla} (${disponible ? "disponible" : "agotado"})`;
}
