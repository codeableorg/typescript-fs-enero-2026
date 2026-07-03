# 07 · Funciones a fondo

## El problema

Las funciones son el corazón del código, y sus firmas pueden decir mucho más que
"recibe esto y devuelve aquello": parámetros que pueden faltar, valores por
defecto, una cantidad variable de argumentos, y funciones que reciben otras
funciones.

## Parámetros opcionales

Un `?` marca un parámetro que puede no pasarse:

```ts
function saludar(nombre: string, saludo?: string): string {
  return `${saludo ?? "Hola"}, ${nombre}`;
}

saludar("Ana"); // "Hola, Ana"
saludar("Ana", "Buenas"); // "Buenas, Ana"
```

Dentro de la función, un parámetro opcional puede ser `undefined`.

## Parámetros por defecto

Un valor por defecto se usa cuando el argumento no se pasa:

```ts
function potencia(base: number, exponente: number = 2): number {
  return base ** exponente;
}

potencia(3); // 9  (3 a la 2)
potencia(2, 3); // 8  (2 a la 3)
```

## Parámetros rest

`...` junta una cantidad variable de argumentos en un array:

```ts
function sumarTodos(...numeros: number[]): number {
  return numeros.reduce((total, n) => total + n, 0);
}

sumarTodos(1, 2, 3); // 6
```

## Tipos de función

Se le puede poner nombre al tipo de una función con un `type`:

```ts
type Operacion = (a: number, b: number) => number;

const sumar: Operacion = (a, b) => a + b;
const restar: Operacion = (a, b) => a - b;
```

## Funciones como argumento

Una función puede recibir otra función como parámetro (orden superior):

```ts
function aplicar(valor: number, fn: (n: number) => number): number {
  return fn(valor);
}

aplicar(5, (x) => x * 2); // 10
```

Así funcionan `map`, `filter` y compañía: reciben una función y la aplican.

## Ejercicio

Abrir `ejercicio.ts` y completar cada `TODO`. Correr `npm test` y dejar los tests
en verde.
