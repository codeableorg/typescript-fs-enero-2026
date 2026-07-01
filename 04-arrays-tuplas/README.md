# 04 · Arrays y tuplas

## El problema

Casi nunca se trabaja con un solo valor: hay listas de puntajes, de nombres, de
productos. TypeScript necesita saber de qué tipo son los elementos de una lista
para poder protegerla.

## Arrays

Un array se tipa con el tipo de sus elementos seguido de `[]`:

```ts
const puntajes: number[] = [10, 8, 9];
const nombres: string[] = ["Ana", "Luis"];
```

Existe una segunda sintaxis equivalente, `Array<...>`:

```ts
const puntajes: Array<number> = [10, 8, 9];
```

Las dos significan lo mismo; `number[]` es la más común.

TypeScript revisa que todos los elementos sean del tipo declarado:

```ts
const puntajes: number[] = [10, "ocho"];
//                              'string' no es asignable a 'number'.
```

## Arrays de uniones

Si una lista mezcla tipos, se usa una unión entre paréntesis:

```ts
const mezcla: (string | number)[] = ["Ana", 30, "Luis", 25];
```

Los paréntesis importan: sin ellos, `string | number[]` significaría "un string,
o un array de números". Con ellos, `(string | number)[]` significa "un array de
elementos que son string o number".

## Tuplas

Una **tupla** es un array de longitud fija donde cada posición tiene su propio
tipo:

```ts
const coordenada: [string, number] = ["x", 10];
coordenada[0]; // string
coordenada[1]; // number
```

A diferencia de `(string | number)[]`, en una tupla el orden y la cantidad
importan: primero un `string`, después un `number`, y nada más.

## Arrays de solo lectura

`readonly` marca un array que no se puede modificar después de crearse:

```ts
const dias: readonly string[] = ["lun", "mar", "mie"];
dias.push("jue");
//   Property 'push' does not exist on type 'readonly string[]'.
```

## Funciones con arrays

Los arrays se anotan igual como parámetros y como retorno:

```ts
function sumar(numeros: number[]): number {
  return numeros.reduce((total, n) => total + n, 0);
}
```

## Ejercicio

Abrir `ejercicio.ts` y completar cada `TODO`. Correr `npm test` y dejar los tests
en verde.
