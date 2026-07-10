# 10 · Genéricos (introducción)

## El problema

Una función `identidad` que devuelve lo que recibe. Si se tipa con `number`,
solo sirve para números. Con `unknown`, funciona con todo pero se pierde el
tipo: quien la use no sabe qué le devuelve.

```ts
function identidad(valor: unknown): unknown {
  return valor;
}

const x = identidad(5); // x es unknown, no number 😞
```

Los **genéricos** resuelven esto: dejan que el tipo sea un parámetro más.

## Función genérica

Un tipo genérico se declara entre `<>` y se usa como cualquier otro tipo:

```ts
function identidad<T>(valor: T): T {
  return valor;
}

const x = identidad(5); // x es number
const y = identidad("hola"); // y es string
```

`T` es un "hueco" que TypeScript **infiere** en cada llamada según el argumento.
No hace falta escribir `identidad<number>(5)`: lo deduce solo.

## Varios parámetros de tipo

Una función puede tener más de uno:

```ts
function par<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

par(1, "hola"); // [number, string]
```

## Restricciones con extends

A veces el tipo genérico no puede ser cualquier cosa: tiene que tener al menos
cierta forma. `extends` limita qué tipos se aceptan:

```ts
function nombreDe<T extends { nombre: string }>(item: T): string {
  return item.nombre; // se puede acceder a .nombre porque T lo garantiza
}

nombreDe({ nombre: "Ana", edad: 30 }); // ok
nombreDe({ edad: 30 }); // Error: falta 'nombre'
```

Sin la restricción, TypeScript no dejaría acceder a `item.nombre`, porque `T`
podría no tenerla.

## Ejercicio

Abrir `ejercicio.ts` y completar cada `TODO`. Correr `npm test` y dejar los tests
en verde.
