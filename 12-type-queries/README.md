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

**Dónde se usa.** Cuando un objeto ya es la fuente de verdad — una
configuración, un tema, datos de prueba — y hace falta su tipo para declarar
más valores con la misma forma:

```ts
const TEMA_OSCURO = { primario: "#0af", fondo: "#111", texto: "#eee" };

type Tema = typeof TEMA_OSCURO;

// Cualquier tema nuevo debe tener exactamente la misma forma:
const temaClaro: Tema = { primario: "#06c", fondo: "#fff", texto: "#111" };
// Si a TEMA_OSCURO se le agrega un color, temaClaro deja de compilar
// hasta que alguien defina ese color acá también.
```

## keyof — las claves de un tipo

`keyof` produce la unión de las claves de un tipo:

```ts
type Usuario = { id: number; nombre: string; email: string };

type Clave = keyof Usuario;
// "id" | "nombre" | "email"
```

**Dónde se usa.** En funciones que reciben "una propiedad de" algo — ordenar
por columna, agrupar por campo, leer dinámicamente. `keyof` convierte el nombre
de la propiedad en un parámetro que el compilador valida:

```ts
// La columna a extraer solo puede ser una clave real de Usuario:
function columna(usuarios: Usuario[], clave: keyof Usuario) {
  return usuarios.map((usuario) => usuario[clave]);
}

columna(usuarios, "email"); // ✅
columna(usuarios, "apellido"); // ❌ error: "apellido" no existe en Usuario
```

Sin `keyof`, el parámetro sería un `string` cualquiera y el typo `"emial"`
llegaría hasta producción.

## Indexed access — el tipo de una propiedad

Un tipo se puede indexar como si fuera un objeto, con `Tipo["propiedad"]`:

```ts
type Email = Usuario["email"]; // string
type IdONombre = Usuario["id" | "nombre"]; // number | string
```

**Dónde se usa.** Para atar una firma al contrato, en vez de copiar el tipo de
un campo:

```ts
// Recibe "lo que sea que hoy es el id de Usuario":
function buscarPorId(usuarios: Usuario[], id: Usuario["id"]) {
  return usuarios.find((usuario) => usuario.id === id);
}
// Si el id migra de number a string (pasa más seguido de lo que parece),
// esta firma no se toca: se actualiza sola.
```

Con arrays y tuplas, indexar por `number` da la unión de sus elementos:

```ts
const FRUTAS = ["manzana", "pera", "uva"] as const;

type Fruta = (typeof FRUTAS)[number];
// "manzana" | "pera" | "uva"
```

**Dónde se usa.** Listas de valores permitidos: el array existe para el
runtime (validar, iterar, llenar un `<select>`) y el tipo sale de él, gratis:

```ts
const MONEDAS = ["PEN", "USD", "EUR"] as const;
type Moneda = (typeof MONEDAS)[number];

function formatear(monto: number, moneda: Moneda): string {
  return `${monto} ${moneda}`;
}

formatear(100, "PEN"); // ✅
formatear(100, "BTC"); // ❌ error: "BTC" no es una Moneda
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

**Dónde se usa.** Es el patrón estándar para roles, estados y categorías: un
solo objeto alimenta la lógica (comparar con `ESTADOS.Pagado`), la UI
(`Object.values(ESTADOS)` para un `<select>`) y los tipos de las firmas:

```ts
const ESTADOS = {
  Pendiente: "pendiente",
  Pagado: "pagado",
  Enviado: "enviado",
} as const;

type Estado = (typeof ESTADOS)[keyof typeof ESTADOS];

function avanzarPedido(pedidoId: number, estado: Estado) {
  /* ... */
}

avanzarPedido(42, ESTADOS.Pagado); // ✅ la lógica usa el valor
avanzarPedido(42, "cancelado"); // ❌ el tipo protege la firma
```

Si mañana aparece el estado `"devuelto"`, se agrega en UN lugar y el tipo, las
comparaciones y el `<select>` se enteran solos.

## Los tres juntos

En [el ejemplo integral](../ejemplo-integral-11-12-13/) este patrón define los
roles de un módulo de usuarios real, y `keyof` reaparece combinado con
genéricos y `Record`.

## Ejercicio

Abrir `ejercicio.ts` y completar cada `TODO`. Correr `npm test` y dejar los tests
en verde.
