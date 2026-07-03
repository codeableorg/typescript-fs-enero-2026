// 07 · Funciones a fondo
//
// Completar cada TODO, del 1 (más simple) al 6 (más completo).
// Correr `npm test` y dejar todo en verde.

// 1. `saludar` debería poder llamarse con o sin `saludo`. Hacer que `saludo`
//    sea opcional y, cuando no se pase, usar "Hola".
export function saludar(nombre: string, saludo: string): string {
  return `${saludo}, ${nombre}`;
}

// 2. `potencia` eleva `base` a `exponente`. Darle a `exponente` un valor por
//    defecto de 2, para poder llamarla solo con la base.
export function potencia(base: number, exponente: number): number {
  return base ** exponente;
}

// 3. `sumarTodos` debería aceptar una cantidad variable de números. Convertir
//    `numeros` en un parámetro rest.
export function sumarTodos(numeros: number[]): number {
  return numeros.reduce((total, n) => total + n, 0);
}

// 4. Definir el type `Operacion`: una función que recibe dos números y devuelve
//    un número.
export type Operacion = unknown; // TODO

export const restar: Operacion = (a: number, b: number) => a - b;

// 5. `aplicar` recibe un número y una función, y devuelve el resultado de
//    aplicar la función al número. Anotar el tipo de `fn` e implementar.
export function aplicar(valor: number, fn: unknown): number {
  return valor; // TODO
}

// 6. `mapear` recibe una lista de números y una función, y devuelve una lista
//    nueva con la función aplicada a cada número. Anotar el tipo de `fn` e
//    implementar.
export function mapear(numeros: number[], fn: unknown): number[] {
  return numeros; // TODO
}
