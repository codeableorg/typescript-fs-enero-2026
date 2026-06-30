# TypeScript desde las bases — FS Enero 2026

Curso práctico de TypeScript. Cada tema combina una lección breve (el concepto)
con un ejercicio que se valida con tests: primero se entiende, después se escribe.

## Requisitos

- Node.js 20 o superior. El proyecto fija la versión 24.15.0 en `.nvmrc`.
- Un gestor de versiones de Node (nvm, fnm, asdf, etc.) que lea `.nvmrc` tomará
  esa versión automáticamente. No es obligatorio: alcanza con tener Node
  instalado en una versión compatible.

## Instalación

```bash
npm install
```

Si se usa un gestor de versiones, conviene alinear la versión con el `.nvmrc`
del proyecto antes de instalar.

## Cómo se trabaja cada tema

Cada carpeta `NN-tema/` tiene tres archivos:

- `README.md` — la teoría y los ejemplos. Se lee primero.
- `ejercicio.ts` — el código a completar. Cada `TODO` indica qué falta.
- `ejercicio.test.ts` — los tests. No se tocan; son la meta a alcanzar.

El flujo es: leer el `README`, completar los `TODO` del `ejercicio.ts` y dejar
todos los tests en verde.

## Comandos

```bash
npm test         # corre los tests en modo watch (tipos + comportamiento)
npm run test:run # corre los tests una sola vez
npm run check    # solo revisa tipos con tsc, sin ejecutar tests
```

`npm test` valida dos cosas a la vez: que los **tipos** sean correctos
(`--typecheck`) y que el **comportamiento** en tiempo de ejecución sea el
esperado.

## Temas

Los temas están en las carpetas numeradas (`00-...`, `01-...`), en orden. Se
recomienda seguirlas de forma secuencial.
