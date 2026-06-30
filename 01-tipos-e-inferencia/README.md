# 01 · Tipos e inferencia

## El problema

JavaScript no avisa cuando un valor no es lo que el código espera. Una variable
que debía ser un número puede terminar con un texto, y el error recién aparece
cuando el programa ya está corriendo —muchas veces, frente al usuario.

TypeScript resuelve esto revisando los tipos **antes** de ejecutar. Si algo no
encaja, lo marca mientras se escribe el código. Ese aviso temprano es la
herramienta central del curso.

## Anotar un tipo

Un tipo se declara después del nombre, con dos puntos:

```ts
const nombre: string = "Ana";
const edad: number = 30;
const activo: boolean = true;
```

Si el valor no coincide con el tipo, TypeScript lo marca:

```ts
const edad: number = "treinta";
//    Type 'string' is not assignable to type 'number'.
```

## Inferencia

No siempre hace falta anotar. Cuando TypeScript puede deducir el tipo a partir
del valor, lo hace solo. Esto se llama **inferencia**:

```ts
let total = 100;   // TypeScript infiere: number
total = "cien";    // Error: 'string' no es asignable a 'number'
```

`total` quedó como `number` sin escribirlo, solo por su valor inicial.

## Tipos en funciones

En una función se anotan los parámetros y el valor de retorno:

```ts
function sumar(a: number, b: number): number {
  return a + b;
}
```

Así, quien use `sumar` sabe qué recibe y qué devuelve, y TypeScript verifica
ambos lados de la llamada.

## Ejercicio

Abrir `ejercicio.ts` y completar cada `TODO`. Correr `npm test` y dejar los
tres tests en verde.
