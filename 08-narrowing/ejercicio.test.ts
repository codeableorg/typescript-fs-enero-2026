// Este archivo es la meta del ejercicio: valida tipos y comportamiento.
// Mostrará errores en rojo hasta completar `ejercicio.ts`; eso es lo esperado,
// no un fallo de los tests. No editar este archivo.

import { test, expect, expectTypeOf } from "vitest";
import {
  describir,
  nombreODefault,
  area,
  areaFigura,
  describirEstado,
  areasTotales,
} from "./ejercicio";
import type { Cuadrado, Rectangulo, Figura, Estado } from "./ejercicio";

test("1 · describir distingue texto de número con typeof", () => {
  expectTypeOf(describir).parameter(0).toEqualTypeOf<string | number>();
  expect(describir("hola")).toBe("texto: hola");
  expect(describir(5)).toBe("número: 5");
});

test("2 · nombreODefault maneja null con truthiness", () => {
  expectTypeOf(nombreODefault).parameter(0).toEqualTypeOf<string | null>();
  expect(nombreODefault("Ana")).toBe("Ana");
  expect(nombreODefault(null)).toBe("invitado");
});

test("3 · area distingue con el operador in", () => {
  expectTypeOf(area).parameter(0).toEqualTypeOf<Cuadrado | Rectangulo>();
  expect(area({ lado: 3 })).toBe(9);
  expect(area({ ancho: 2, alto: 5 })).toBe(10);
});

test("4 · areaFigura usa el discriminante tipo", () => {
  expectTypeOf(areaFigura).parameter(0).toEqualTypeOf<Figura>();
  expect(areaFigura({ tipo: "cuadrado", lado: 3 })).toBe(9);
  expect(areaFigura({ tipo: "rectangulo", ancho: 2, alto: 5 })).toBe(10);
});

test("5 · describirEstado maneja los tres estados", () => {
  expectTypeOf(describirEstado).parameter(0).toEqualTypeOf<Estado>();
  expect(describirEstado({ estado: "cargando" })).toBe("Cargando...");
  expect(describirEstado({ estado: "listo", datos: "ok" })).toBe("Listo: ok");
  expect(describirEstado({ estado: "error", mensaje: "boom" })).toBe(
    "Error: boom",
  );
});

test("6 · areasTotales suma las áreas de las figuras", () => {
  expectTypeOf(areasTotales).parameter(0).toEqualTypeOf<Figura[]>();
  const figuras: Figura[] = [
    { tipo: "cuadrado", lado: 3 },
    { tipo: "rectangulo", ancho: 2, alto: 5 },
  ];
  expect(areasTotales(figuras)).toBe(19);
  expect(areasTotales([])).toBe(0);
});
