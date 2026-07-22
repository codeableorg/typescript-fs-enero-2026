# 13 · Type guards personalizados

## Narrowing y type guard: dos caras de lo mismo

En el tema 08 se usaron `typeof`, `in` y las comparaciones para que TypeScript
redujera una unión al caso correcto. Conviene ponerle nombre preciso a cada
parte:

- El **type guard** es la **comprobación**: la expresión que distingue un tipo
  de otro. `typeof x === "string"`, `"nada" in mascota`, `x === null` son type
  guards que TypeScript trae de fábrica.
- El **narrowing** es el **efecto**: lo que TypeScript hace con esa comprobación
  — reducir el tipo dentro de la rama correspondiente.

Se complementan siempre: el guard dispara, el narrowing ocurre. Sin guard no hay
narrowing; sin narrowing, el guard sería un boolean como cualquier otro.

El límite de los guards de fábrica: la comprobación vive **inline**, dentro del
`if`. Si la misma comprobación se necesita en cinco lugares, se repite cinco
veces. Este tema muestra cómo **empaquetar un guard en una función** para
reutilizarlo.

## El problema del boolean "mudo"

Extraer la comprobación a una función parece suficiente... pero se pierde el
narrowing:

```ts
function esTexto(valor: string | number): boolean {
  return typeof valor === "string";
}

function procesar(valor: string | number) {
  if (esTexto(valor)) {
    valor.toUpperCase();
    // Error: TypeScript no sabe que `true` significa "es un string".
  }
}
```

Para TypeScript, `esTexto` devuelve un `boolean` cualquiera: no conecta el
`true` con el tipo.

## value is Type — predicados de tipo

El retorno `valor is string` le dice a TypeScript qué significa el `true`:

```ts
function esTexto(valor: string | number): valor is string {
  return typeof valor === "string";
}

function procesar(valor: string | number) {
  if (esTexto(valor)) {
    valor.toUpperCase(); // ✅ acá valor es string
  }
}
```

Con eso, la función **es** un type guard: usarla en un `if` produce narrowing,
igual que un `typeof` inline, pero con nombre propio y reutilizable.

**Dónde se usa.** Además del `if`, el lugar donde más rinde un guard con nombre
es **`filter`**: no angosta una rama, angosta el tipo del array completo:

```ts
type Perro = { nombre: string; ladra: true };
type Gato = { nombre: string; ronronea: true };

function esPerro(mascota: Perro | Gato): mascota is Perro {
  return "ladra" in mascota;
}

declare const mascotas: (Perro | Gato)[];

const perros = mascotas.filter(esPerro);
// tipo: Perro[] — filtró en runtime Y el tipo del array lo refleja
```

El mismo guard sirve en el `if` de una rama, en el `filter` de una lista y en
el `find` de una búsqueda: se escribe una vez, angosta en todos lados.

## asserts value is Type — funciones de aserción

Un guard devuelve `true`/`false` y se usa con `if`. Una **aserción** no
devuelve nada: **lanza un error** si la condición no se cumple. Si la llamada
sobrevive, TypeScript asume el tipo de ahí en adelante:

```ts
function assertEsTexto(valor: unknown): asserts valor is string {
  if (typeof valor !== "string") {
    throw new Error("No es un texto");
  }
}

function gritar(valor: unknown): string {
  assertEsTexto(valor);
  return valor.toUpperCase(); // ✅ sin if: si llegó acá, es string
}
```

¿Cuándo usar cada uno?

- **Guard (`is`)** → hay dos caminos válidos y el código decide con `if`.
- **Aserción (`asserts`)** → no cumplir el tipo es un **error**: se corta la
  ejecución y el código sigue lineal, sin ramas.

**Dónde se usa.** El caso clásico es el arranque de una aplicación: las
variables de entorno son `string | undefined`, y sin ellas la app no puede
funcionar — no hay "segundo camino", hay error:

```ts
function assertDefinida(
  valor: string | undefined,
  nombre: string,
): asserts valor is string {
  if (valor === undefined) {
    throw new Error(`Falta la variable de entorno ${nombre}`);
  }
}

const dbUrl = process.env.DB_URL; // string | undefined
assertDefinida(dbUrl, "DB_URL");
conectar(dbUrl); // ✅ acá ya es string: la app no arranca a medias
```

Fallar temprano y con un mensaje claro es mejor que un `undefined` paseándose
por el sistema hasta explotar lejos de su origen.

## El caso real: validar datos externos

Donde más brillan los guards propios es al validar datos de afuera (una API,
un JSON), que llegan como `unknown`:

```ts
type Usuario = { id: number; nombre: string };

function esUsuario(valor: unknown): valor is Usuario {
  return (
    typeof valor === "object" &&
    valor !== null &&
    "id" in valor &&
    typeof valor.id === "number" &&
    "nombre" in valor &&
    typeof valor.nombre === "string"
  );
}
```

Este patrón conecta el tema 02 (`unknown` obliga a comprobar) con todo lo visto
de narrowing: el guard es la comprobación empaquetada que convierte un
`unknown` en un tipo confiable.

Y combinado con `filter`, limpia una respuesta entera en una línea:

```ts
declare const respuestaDeLaApi: unknown[];

const usuarios = respuestaDeLaApi.filter(esUsuario);
// tipo: Usuario[] — la basura quedó afuera, en runtime y en el tipo
```

Es exactamente lo que hacen librerías de validación como Zod: definir la forma
esperada y comprobar `unknown` contra ella. Escribir el guard a mano primero es
entender la librería antes de usarla.

## Los tres juntos

En [el ejemplo integral](../ejemplo-integral-11-12-13/) los guards custodian la
frontera de un módulo de usuarios real, y su [demo ejecutable](../ejemplo-integral-11-12-13/demo.ts)
muestra este `filter` corriendo con datos sucios de verdad.

## Ejercicio

Abrir `ejercicio.ts` y completar cada `TODO`. Correr `npm test` y dejar los tests
en verde.
