# 06 · interface vs type

## El problema

Ya se vio que un `type` alias describe la forma de un objeto. TypeScript ofrece
una segunda herramienta para lo mismo: `interface`. Las dos sirven para
describir objetos, y conviene saber en qué se parecen, en qué se diferencian y
cuándo usar cada una.

## interface

Una `interface` describe la forma de un objeto:

```ts
interface Producto {
  nombre: string;
  precio: number;
}

const teclado: Producto = { nombre: "Teclado", precio: 120 };
```

Para describir objetos, `interface` y `type` son casi intercambiables:

```ts
interface Producto {
  nombre: string;
}

// equivale, para un objeto, a:
type ProductoAlias = {
  nombre: string;
};
```

Igual que con `type`, una interface admite propiedades opcionales (`?`) y de solo
lectura (`readonly`).

## extends

Una interface puede **extender** otra: hereda sus propiedades y agrega las suyas:

```ts
interface Persona {
  nombre: string;
}

interface Empleado extends Persona {
  salario: number;
}

// Empleado tiene: nombre y salario.
const ana: Empleado = { nombre: "Ana", salario: 1000 };
```

## ¿Cuál usar?

- `interface` → describir la forma de objetos, sobre todo si se van a **extender**.
- `type` → todo lo que `interface` no puede: uniones, tipos literales, tuplas,
  o ponerle nombre a un tipo que no es un objeto.

Para objetos simples, la elección es de estilo. Una convención común: `interface`
para objetos, `type` para uniones y tipos que no son objetos.

## Ejercicio

Abrir `ejercicio.ts` y completar cada `TODO`. Correr `npm test` y dejar los tests
en verde.
