# 02 · any, unknown, void y never

## El problema

No siempre se conoce el tipo de un valor: a veces llega de afuera (de una API,
de una entrada del usuario) y podría ser cualquier cosa. Otras veces una función
no devuelve nada, o directamente nunca termina de forma normal. Para esos casos
TypeScript tiene cuatro tipos especiales.

## `any` — apagar el chequeo

`any` significa "cualquier cosa, y no revises nada". Con `any`, TypeScript deja
de proteger ese valor:

```ts
let dato: any = "texto";
dato.toUpperCase();      // ok
dato.metodoInventado();  // también lo permite... y revienta en ejecución
dato();                  // también lo permite
```

Todo compila, y los errores recién aparecen al ejecutar. `any` desactiva
justamente lo que TypeScript vino a aportar. Por eso se evita.

## `unknown` — el "any seguro"

`unknown` también acepta cualquier valor, pero **no deja usarlo** hasta
comprobar qué es:

```ts
let dato: unknown = "texto";
dato.toUpperCase();
//   'dato' is of type 'unknown'.

if (typeof dato === "string") {
  dato.toUpperCase(); // acá sí: ya se sabe que es string
}
```

La diferencia clave: `any` permite todo y no avisa; `unknown` obliga a verificar
antes de usar. Cuando un valor llega sin tipo conocido, se usa `unknown`, nunca
`any`. (La forma de comprobar y "reducir" el tipo se ve en detalle en el tema de
*narrowing*.)

## `void` — no devuelve nada

`void` es el tipo de retorno de una función que se ejecuta por su efecto, no por
su resultado:

```ts
function registrar(mensaje: string): void {
  console.log(mensaje);
  // no hay un return con valor
}
```

Si se declara un tipo de retorno distinto de `void` (por ejemplo `string`) pero
la función no devuelve nada, TypeScript marca el error: el tipo de "no devolver
nada" es `void`.

## `never` — lo que nunca ocurre

`never` representa un valor que **nunca** se produce. El caso típico es una
función que siempre lanza un error o que nunca termina:

```ts
function fallar(mensaje: string): never {
  throw new Error(mensaje);
}
```

`void` y `never` no son lo mismo: `void` **sí** termina, simplemente no devuelve
un valor; `never` **no** llega a terminar de forma normal. `never` vuelve a
aparecer más adelante, al asegurar que todos los casos de una unión fueron
cubiertos (tema de *narrowing*).

## Ejercicio

Abrir `ejercicio.ts` y completar cada `TODO`. Correr `npm test` y dejar los tests
en verde.
