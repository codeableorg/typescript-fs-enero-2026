# 12 · Type queries

## El problema

El tipo que se necesita muchas veces **ya existe** en otro lado: en un valor, en
otro tipo, en una propiedad. Copiarlo a mano crea duplicación: si el original
cambia, la copia queda desactualizada y TypeScript no avisa. Las **type
queries** derivan tipos a partir de lo que ya existe, en vez de repetirlo.

## typeof — el tipo de un valor

En posición de tipo, `typeof` toma el tipo de una variable:

```ts
const config = {
  host: "localhost",
  puerto: 8080,
};

type Config = typeof config;
// { host: string; puerto: number }
```

**Cuidado con la confusión:** este `typeof` no es el de los temas 03 y 08. Son
la misma palabra en dos mundos distintos:

- En una **expresión** (`if (typeof x === "string")`) es JavaScript: corre en
  tiempo de ejecución y devuelve un texto.
- En una **posición de tipo** (`type Config = typeof config`) es TypeScript:
  se evalúa al compilar y produce un tipo.

## keyof — las claves de un tipo

`keyof` produce la unión de las claves de un tipo:

```ts
type Usuario = { id: number; nombre: string; email: string };

type Clave = keyof Usuario;
// "id" | "nombre" | "email"
```

## Indexed access — el tipo de una propiedad

Un tipo se puede indexar como si fuera un objeto, con `Tipo["propiedad"]`:

```ts
type Email = Usuario["email"]; // string
type IdONombre = Usuario["id" | "nombre"]; // number | string
```

Con arrays y tuplas, indexar por `number` da la unión de sus elementos:

```ts
const FRUTAS = ["manzana", "pera", "uva"] as const;

type Fruta = (typeof FRUTAS)[number];
// "manzana" | "pera" | "uva"
```

## as const + keyof typeof — el patrón completo

En el tema 09 se usó esta receta; ahora se puede leer pieza por pieza:

```ts
const COLORES = {
  Rojo: "rojo",
  Verde: "verde",
} as const;

type ClaveColor = keyof typeof COLORES; // "Rojo" | "Verde"
type Color = (typeof COLORES)[keyof typeof COLORES]; // "rojo" | "verde"
```

1. `typeof COLORES` → el tipo del objeto (con literales, gracias a `as const`).
2. `keyof typeof COLORES` → la unión de sus claves.
3. Indexar el tipo por sus claves → la unión de sus **valores**.

## Ejercicio

Abrir `ejercicio.ts` y completar cada `TODO`. Correr `npm test` y dejar los tests
en verde.
