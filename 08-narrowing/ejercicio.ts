// 08 · Narrowing
//
// Completar cada TODO, del 1 (más simple) al 6 (más completo).
// Correr `npm test` y dejar todo en verde.

// Tipos provistos para los ejercicios (no hace falta modificarlos).
export type Cuadrado = { lado: number };
export type Rectangulo = { ancho: number; alto: number };

export type Figura =
  | { tipo: "cuadrado"; lado: number }
  | { tipo: "rectangulo"; ancho: number; alto: number };

export type Estado =
  | { estado: "cargando" }
  | { estado: "listo"; datos: string }
  | { estado: "error"; mensaje: string };

// 1. `describir` recibe un texto o un número. Anotar el parámetro y devolver
//    "texto: <valor>" si es texto, o "número: <valor>" si es número (usar
//    `typeof`).
export function describir(valor: unknown): string {
  return String(valor); // TODO
}

// 2. `nombreODefault` recibe un nombre que puede ser `null`. Anotar el
//    parámetro y devolver el nombre si existe, o "invitado" si es null (usar
//    truthiness).
export function nombreODefault(nombre: unknown): string {
  return String(nombre); // TODO
}

// 3. `area` recibe un `Cuadrado` o un `Rectangulo`. Anotar el parámetro y
//    devolver su área, distinguiendo con el operador `in` (Cuadrado tiene
//    `lado`; Rectangulo, `ancho` y `alto`).
export function area(figura: unknown): number {
  return 0; // TODO
}

// 4. `areaFigura` recibe una `Figura` (unión discriminada por `tipo`). Anotar el
//    parámetro y devolver el área según el tipo.
export function areaFigura(figura: unknown): number {
  return 0; // TODO
}

// 5. `describirEstado` recibe un `Estado`. Anotar el parámetro y devolver:
//    "Cargando..." / "Listo: <datos>" / "Error: <mensaje>", según el estado.
export function describirEstado(estado: unknown): string {
  return String(estado); // TODO
}

// 6. `areasTotales` recibe una lista de figuras y devuelve la suma de sus áreas.
//    Anotar el parámetro e implementar (se puede reutilizar `areaFigura`).
export function areasTotales(figuras: unknown): number {
  return 0; // TODO
}
