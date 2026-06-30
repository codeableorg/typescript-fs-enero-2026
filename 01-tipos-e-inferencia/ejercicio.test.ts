import { test, expect, expectTypeOf } from "vitest";
import { titulo, anio, enCurso, saludar, doble } from "./ejercicio";

test("1 · los valores tienen el tipo correcto", () => {
  expectTypeOf(titulo).toEqualTypeOf<string>();
  expectTypeOf(anio).toEqualTypeOf<number>();
  expectTypeOf(enCurso).toEqualTypeOf<boolean>();
});

test("2 · saludar devuelve el saludo esperado", () => {
  expect(saludar("Ana")).toBe("Hola, Ana");
  expect(saludar("Luis")).toBe("Hola, Luis");
});

test("3 · doble está bien tipada y duplica el número", () => {
  expectTypeOf(doble).parameter(0).toEqualTypeOf<number>();
  expectTypeOf(doble).returns.toEqualTypeOf<number>();
  expect(doble(3)).toBe(6);
  expect(doble(0)).toBe(0);
});
