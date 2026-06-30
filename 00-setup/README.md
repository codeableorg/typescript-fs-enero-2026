# 00 · Setup y primer compilado

> Esta lección se hace en una **carpeta de práctica aparte**, no en el repo del
> curso. La idea es ver el flujo completo de TypeScript a mano una vez; después,
> el curso lo automatiza. Por eso este tema no tiene `ejercicio.ts` ni tests.

## Qué es TypeScript

TypeScript es un lenguaje que agrega tipos a JavaScript. No lo reemplaza: lo
amplía. Ni el navegador ni Node ejecutan TypeScript directamente —antes hay que
**compilarlo** a JavaScript. Esa compilación es la que revisa los tipos y avisa
de los errores antes de ejecutar.

La herramienta que hace ese trabajo es `tsc`, el compilador de TypeScript.

## 1. Crear el proyecto

```bash
mkdir practica-ts
cd practica-ts
npm init -y
```

`npm init -y` crea `package.json`, el archivo donde npm anota el nombre del
proyecto, sus scripts y sus dependencias.

## 2. Instalar TypeScript

```bash
npm install -D typescript
```

`-D` (abreviatura de `--save-dev`) instala TypeScript como **dependencia de
desarrollo**: una herramienta que se usa para construir el proyecto, no parte
del programa final. Se instala **local** al proyecto, no de forma global, para
que cada proyecto fije su propia versión de TypeScript y no dependa de lo que
tenga instalado cada máquina.

El compilador queda disponible a través de `npx`:

```bash
npx tsc --version
```

## 3. Generar la configuración

```bash
npx tsc --init
```

Crea `tsconfig.json`, el archivo de configuración del compilador. Define qué
versión de JavaScript genera, cómo resuelve los módulos y qué tan estricto es el
chequeo de tipos.

## 4. Opciones clave de tsconfig

- `target` — la versión de JavaScript que se genera (por ejemplo, `ES2022`).
- `module` — el sistema de módulos de la salida (por ejemplo, `ESNext` o `CommonJS`).
- `strict` — activa todos los chequeos estrictos. Es la base de un buen proyecto
  y `tsc --init` ya lo deja activado.
- `rootDir` — carpeta donde están los archivos `.ts` de entrada.
- `outDir` — carpeta donde se dejan los `.js` generados.
- `noEmit` — si está en `true`, `tsc` solo revisa tipos y no genera archivos.

## 5. Primer compilado

Crear un archivo `hola.ts`:

```ts
const mensaje: string = "Hola, TypeScript";
console.log(mensaje);
```

Compilar:

```bash
npx tsc
```

`tsc` genera un `hola.js` a partir del `hola.ts`. Ese archivo ya es JavaScript
puro y se ejecuta con Node:

```bash
node hola.js
# Hola, TypeScript
```

## 6. Modo watch

```bash
npx tsc --watch
```

Deja el compilador escuchando: ante cada cambio recompila y muestra los errores
al instante. Ese es el ciclo de trabajo normal con TypeScript.

## 7. Ver un error de tipo

Cambiar la anotación por un tipo que no corresponde:

```ts
const mensaje: number = "Hola, TypeScript";
// Type 'string' is not assignable to type 'number'.
```

`tsc` marca el error **antes** de ejecutar. Ese aviso temprano es el motivo de
usar TypeScript.

## 8. Cómo lo automatiza este curso

Compilar y ejecutar a mano sirve para entender el flujo. En el curso, en vez de
correr `tsc` y `node` por separado, Vitest revisa los tipos y ejecuta las
pruebas con un solo comando (`npm test`). El `tsconfig.json` del curso usa
`noEmit: true` porque no hace falta generar `.js`: Vitest corre los `.ts`
directamente.

## Ejercicio

En una carpeta de práctica nueva:

1. Iniciar el proyecto con npm e instalar TypeScript como dependencia de desarrollo.
2. Generar el `tsconfig.json` y verificar que `strict` esté activado.
3. Escribir un `hola.ts` que imprima un mensaje, compilarlo y ejecutarlo con Node.
4. Romper un tipo a propósito y leer el error del compilador.

Al terminar, conviene poder explicar qué hace `tsc`, qué es `package.json` y para
qué sirve `tsconfig.json`.
