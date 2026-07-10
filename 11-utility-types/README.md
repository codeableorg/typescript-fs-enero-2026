# 11 · Utility types (introducción)

## El problema

Ya se tiene un type `Usuario`. Ahora hace falta "un usuario con todo opcional"
(para un formulario), "solo su id y nombre" (para una lista), "un usuario sin el
email" (para exponerlo público). Se podría escribir cada variante a mano, pero
TypeScript ya trae **utility types**: tipos que derivan uno nuevo a partir de
otro.

Se usan como genéricos: `Utility<TipoBase>`.

## Partial y Required

`Partial<T>` hace **todas** las propiedades opcionales; `Required<T>`, todas
obligatorias:

```ts
type Usuario = { id: number; nombre: string };

type UsuarioParcial = Partial<Usuario>;
// { id?: number; nombre?: string }

type Config = { host?: string };
type ConfigCompleta = Required<Config>;
// { host: string }
```

## Pick y Omit

`Pick<T, Claves>` se queda solo con las propiedades elegidas; `Omit<T, Claves>`
saca las indicadas:

```ts
type Usuario = { id: number; nombre: string; email: string };

type Resumen = Pick<Usuario, "id" | "nombre">;
// { id: number; nombre: string }

type SinEmail = Omit<Usuario, "email">;
// { id: number; nombre: string }
```

## Record

`Record<Claves, Valor>` describe un objeto con claves y valores de un tipo dado:

```ts
type Inventario = Record<string, number>;

const stock: Inventario = { manzanas: 3, peras: 5 };
```

## Ejercicio

Abrir `ejercicio.ts` y completar cada `TODO`. Correr `npm test` y dejar los tests
en verde.
