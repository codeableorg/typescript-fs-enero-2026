# 08 · Narrowing (afinar el tipo)

## El problema

Una unión como `string | number` dice "una cosa o la otra". Para usar lo
específico de cada caso, TypeScript necesita saber en CUÁL estamos. **Narrowing**
es afinar un tipo amplio a uno más preciso según una comprobación. Ya se usó
`typeof` de pasada; acá se ven todas las formas.

## typeof

Distingue tipos primitivos:

```ts
function describir(valor: string | number) {
  if (typeof valor === "string") {
    return valor.toUpperCase(); // acá es string
  }
  return valor * 2; // acá es number
}
```

## Truthiness (valor "verdadero")

Un `if (valor)` descarta `null`, `undefined` y otros valores "falsos":

```ts
function saludar(nombre: string | null) {
  if (nombre) {
    return `Hola, ${nombre}`; // nombre es string
  }
  return "Hola, invitado";
}
```

## El operador `in`

Distingue objetos según qué propiedad tienen:

```ts
type Perro = { ladrar: () => void };
type Gato = { maullar: () => void };

function sonar(animal: Perro | Gato) {
  if ("ladrar" in animal) {
    animal.ladrar(); // es Perro
  } else {
    animal.maullar(); // es Gato
  }
}
```

## Igualdad

Comparar con un valor concreto también afina el tipo:

```ts
function mover(dir: "arriba" | "abajo") {
  if (dir === "arriba") {
    // acá `dir` es "arriba"
  }
}
```

## Uniones discriminadas

La forma más robusta de modelar "uno de varios casos": cada variante comparte una
propiedad común (el **discriminante**) con un valor literal distinto:

```ts
type Figura =
  | { tipo: "circulo"; radio: number }
  | { tipo: "cuadrado"; lado: number };

function area(figura: Figura): number {
  switch (figura.tipo) {
    case "circulo":
      return Math.PI * figura.radio ** 2; // acá tiene radio
    case "cuadrado":
      return figura.lado ** 2; // acá tiene lado
  }
}
```

El campo `tipo` le dice a TypeScript exactamente qué variante es, y habilita las
propiedades correctas en cada rama.

## Ejercicio

Abrir `ejercicio.ts` y completar cada `TODO`. Correr `npm test` y dejar los tests
en verde.
