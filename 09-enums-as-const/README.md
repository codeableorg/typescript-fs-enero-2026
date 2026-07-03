# 09 · Enums y as const

## El problema

A veces un valor solo puede ser uno de un conjunto cerrado: el estado de un
pedido, un rol, una prioridad. Ya se vio una forma —las uniones de literales
(tema 03)—. Acá se ven dos herramientas más: `enum` y `as const`.

## enum

Un `enum` agrupa un conjunto de constantes con nombre:

```ts
enum Estado {
  Pendiente = "pendiente",
  Enviado = "enviado",
  Entregado = "entregado",
}

const actual: Estado = Estado.Pendiente;
console.log(actual); // "pendiente"
```

Sin valores explícitos, un enum numera desde 0 (`Pendiente = 0`, `Enviado = 1`,
...). Conviene darles valores de texto para que sean legibles.

**El problema de los enums:** generan código JavaScript extra y tienen algunas
rarezas de tipos. Por eso muchos equipos prefieren la alternativa de abajo.

## as const

Un objeto marcado con `as const` hace que TypeScript infiera sus valores como
literales exactos, no como `string`:

```ts
const COLORES = {
  Rojo: "rojo",
  Verde: "verde",
} as const;
// COLORES.Rojo es del tipo "rojo", no string.
```

## Derivar una unión

A partir de ese objeto se puede derivar una unión con sus valores:

```ts
type Color = (typeof COLORES)[keyof typeof COLORES];
// Color = "rojo" | "verde"
```

`typeof COLORES` toma el tipo del objeto; `keyof typeof COLORES` son sus claves;
e indexar por esas claves da la unión de sus valores. Es el patrón habitual para
tener un conjunto cerrado sin usar `enum`.

## Ejercicio

Abrir `ejercicio.ts` y completar cada `TODO`. Correr `npm test` y dejar los tests
en verde.
