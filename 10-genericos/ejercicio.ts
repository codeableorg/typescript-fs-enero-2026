// 10 · Genéricos (introducción)
//
// Completar cada TODO, del 1 (más simple) al 6 (más completo).
// Correr `npm test` y dejar todo en verde.

// 1. `identidad` devuelve el mismo valor que recibe, conservando su tipo.
//    Convertirla en genérica: <T>(valor: T): T.
export function identidad(valor: unknown): unknown {
  return valor; // TODO: hacerla genérica
}

// 2. `primero` devuelve el primer elemento de una lista, con el tipo de sus
//    elementos. Hacerla genérica.
export function primero(lista: unknown[]): unknown {
  return lista[0]; // TODO: hacerla genérica
}

// 3. `envolver` mete un valor en un array. Hacerla genérica: <T>(valor: T): T[].
export function envolver(valor: unknown): unknown[] {
  return [valor]; // TODO: hacerla genérica
}

// 4. `par` arma una tupla con dos valores de tipos posiblemente distintos.
//    Hacerla genérica con dos parámetros de tipo: <A, B>(a: A, b: B): [A, B].
export function par(a: unknown, b: unknown): unknown[] {
  return [a, b]; // TODO: hacerla genérica (y devolver una tupla [A, B])
}

// 5. `rebajar` baja el `precio` de un objeto y devuelve el objeto COMPLETO,
//    conservando todas sus propiedades. Hacerla genérica con una restricción:
//    <T extends { precio: number }>(item: T, monto: number): T.
export function rebajar(
  item: { precio: number },
  monto: number,
): { precio: number } {
  return { ...item, precio: item.precio - monto }; // TODO: hacerla genérica
}

// 6. `mapear` aplica una función a cada elemento de una lista y devuelve la
//    lista transformada. Hacerla genérica: <T, U>(lista: T[], fn: (item: T) =>
//    U): U[].
export function mapear(
  lista: number[],
  fn: (item: number) => number,
): number[] {
  return lista.map(fn); // TODO: hacerla genérica
}
