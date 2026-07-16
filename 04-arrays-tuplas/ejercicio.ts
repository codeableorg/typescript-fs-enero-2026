// 04 · Arrays y tuplas
//
// Completar cada TODO, del 1 (más simple) al 6 (más completo).
// Correr `npm test` y dejar todo en verde.

// 1. `puntajes` es una lista de números. Anotar el tipo de array correcto.

export let puntajes = [10, 8, 9];

// 2. `coordenada` es un par fijo: primero un texto, después un número.
//    Anotar el tipo de tupla correcto.
export let coordenada: [string, number] = ["x", 10];

// 3. `soloPares` recibe una lista de números y devuelve una lista nueva solo
//    con los pares. Anotar el parámetro y el retorno, e implementar.
export function soloPares(numeros: number[]): number[] {
  return numeros.filter((n) => n % 2 === 0);
}

// 4. `mezcla` es una lista que puede contener textos y números. Anotar el tipo:
//    un array de la unión `string | number`.
export let mezcla = ["Ana", 30, "Luis", 25];

// 5. `sumar` recibe una lista de números y devuelve la suma de todos. Anotar el
//    parámetro y el retorno, e implementar.

export function sumar(numeros: number[]): number {
  return numeros.reduce((total, n) => total + n, 0);
}

// 6. `contarTipos` recibe una lista de textos y números, y devuelve la tupla
//    [cantidad de textos, cantidad de números]. Anotar el parámetro y el
//    retorno, e implementar.
export function contarTipos(valores: (string | number)[]): [number, number] {
  let textos = 0;
  let numeros = 0;
  for (const v of valores) {
    if (typeof v === "string") textos++;
    else numeros++;
  }

  return [textos, numeros];
}
