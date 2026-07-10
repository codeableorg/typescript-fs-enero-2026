// Este archivo es la meta del ejercicio: valida tipos y comportamiento.
// Mostrará errores en rojo hasta completar `ejercicio.ts`; eso es lo esperado,
// no un fallo de los tests. No editar este archivo.

import { test, expect, expectTypeOf } from "vitest";
import { identidad, primero, envolver, par, rebajar, mapear } from "./ejercicio";

test("1 · identidad conserva el tipo del valor", () => {
  expectTypeOf(identidad(5)).toEqualTypeOf<number>();
  expectTypeOf(identidad("x")).toEqualTypeOf<string>();
  expect(identidad(5)).toBe(5);
  expect(identidad("x")).toBe("x");
});

test("2 · primero devuelve el primer elemento con su tipo", () => {
  expectTypeOf(primero([1, 2, 3])).toEqualTypeOf<number>();
  expectTypeOf(primero(["a", "b"])).toEqualTypeOf<string>();
  expect(primero([1, 2, 3])).toBe(1);
  expect(primero(["a", "b"])).toBe("a");
});

test("3 · envolver mete el valor en un array de su tipo", () => {
  expectTypeOf(envolver(5)).toEqualTypeOf<number[]>();
  expect(envolver(5)).toEqual([5]);
  expect(envolver("x")).toEqual(["x"]);
});

test("4 · par arma una tupla con los dos tipos", () => {
  expectTypeOf(par(1, "x")).toEqualTypeOf<[number, string]>();
  expect(par(1, "x")).toEqual([1, "x"]);
});

test("5 · rebajar baja el precio y conserva el resto del objeto", () => {
  const item = { precio: 100, nombre: "Teclado" };
  const r = rebajar(item, 20);
  expectTypeOf(r).toEqualTypeOf<{ precio: number; nombre: string }>();
  expect(r).toEqual({ precio: 80, nombre: "Teclado" });
});

test("6 · mapear transforma cada elemento (genérico)", () => {
  expectTypeOf(mapear([1, 2, 3], (n) => n * 2)).toEqualTypeOf<number[]>();
  expectTypeOf(mapear(["a", "bb"], (s) => s.length)).toEqualTypeOf<number[]>();
  expect(mapear([1, 2, 3], (n) => n * 2)).toEqual([2, 4, 6]);
  expect(mapear(["a", "bb"], (s) => s.length)).toEqual([1, 2]);
});
