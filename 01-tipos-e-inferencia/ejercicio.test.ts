// Este archivo es la meta del ejercicio: valida tipos y comportamiento.
// Mostrará errores en rojo hasta completar `ejercicio.ts`; eso es lo esperado,
// no un fallo de los tests. No editar este archivo.

import { test, expect, expectTypeOf } from "vitest";
import {
  titulo,
  anio,
  enCurso,
  saludar,
  doble,
  repetir,
  resumen,
} from "./ejercicio";

//! Da falsos positivos
test("1 · titulo es un string", () => {
  expectTypeOf(titulo).toEqualTypeOf<string>();
});

//! Da falsos positivos
test("2 · anio es number y enCurso es boolean", () => {
  expectTypeOf(anio).toEqualTypeOf<number>();
  expectTypeOf(enCurso).toEqualTypeOf<boolean>();
});

test("3 · saludar devuelve el saludo esperado", () => {
  expect(saludar("Ana")).toBe("Hola, Ana");
  expect(saludar("Luis")).toBe("Hola, Luis");
});

test("4 · doble está bien tipada y duplica el número", () => {
  expectTypeOf(doble).parameter(0).toEqualTypeOf<number>();
  expectTypeOf(doble).returns.toEqualTypeOf<number>();
  expect(doble(3)).toBe(6);
  expect(doble(0)).toBe(0);
});

test("5 · repetir repite el texto la cantidad de veces", () => {
  expect(repetir("ab", 3)).toBe("ababab");
  expect(repetir("hey", 1)).toBe("hey");
  expect(repetir("x", 0)).toBe("");
});

test("6 · resumen combina nombre, edad y estado", () => {
  expect(resumen("Ana", 30, true)).toBe("Ana, 30 años, activo");
  expect(resumen("Luis", 25, false)).toBe("Luis, 25 años, inactivo");
});
