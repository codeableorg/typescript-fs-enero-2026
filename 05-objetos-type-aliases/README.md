# 05 · Objetos y type aliases

## El problema

Los datos reales casi siempre vienen agrupados: un producto tiene nombre, precio
y stock; un usuario tiene nombre y correo. Hace falta describir la **forma** de
esos objetos: qué propiedades tienen y de qué tipo es cada una.

## Anotar un objeto

Un objeto se tipa describiendo cada propiedad:

```ts
const teclado: { nombre: string; precio: number } = {
  nombre: "Teclado",
  precio: 120,
};
```

TypeScript exige que estén todas las propiedades declaradas, con su tipo, y
rechaza las que sobran:

```ts
const teclado: { nombre: string } = { nombre: "Teclado", precio: 120 };
//                                                        'precio' no existe en el tipo.
```

## Type alias

Escribir la forma completa cada vez es incómodo. Un **type alias** le pone
nombre a un tipo para reutilizarlo:

```ts
type Producto = {
  nombre: string;
  precio: number;
};

const teclado: Producto = { nombre: "Teclado", precio: 120 };
const mouse: Producto = { nombre: "Mouse", precio: 60 };
```

Por convención, los type aliases se nombran con mayúscula inicial.

## Propiedades opcionales

Un `?` después del nombre marca una propiedad que puede no estar:

```ts
type Usuario = {
  nombre: string;
  email?: string; // opcional
};

const ana: Usuario = { nombre: "Ana" }; // ok, sin email
const luis: Usuario = { nombre: "Luis", email: "luis@x.com" }; // ok, con email
```

## Propiedades de solo lectura

`readonly` marca una propiedad que no se puede reasignar después de crear el
objeto:

```ts
type Cuenta = {
  readonly id: number;
  saldo: number;
};

const c: Cuenta = { id: 1, saldo: 100 };
c.saldo = 200; // ok
c.id = 2; // Error: 'id' es de solo lectura.
```

## Objetos anidados

Una propiedad puede ser, a su vez, un objeto:

```ts
type Producto = {
  nombre: string;
  precio: number;
  fabricante: {
    nombre: string;
    pais: string;
  };
};
```

## Ejercicio

Abrir `ejercicio.ts` y completar cada `TODO`. Correr `npm test` y dejar los tests
en verde.
