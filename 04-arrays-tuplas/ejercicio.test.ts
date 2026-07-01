// Este archivo es la meta del ejercicio: valida tipos y comportamiento.
// Mostrará errores en rojo hasta completar `ejercicio.ts`; eso es lo esperado,
// no un fallo de los tests. No editar este archivo.

import { test, expect, expectTypeOf } from "vitest";
import { puntajes, coordenada, soloPares } from "./ejercicio";

test("1 · puntajes es un array de números", () => {
  expectTypeOf(puntajes).toEqualTypeOf<number[]>();
});

test("2 · coordenada es la tupla [string, number]", () => {
  expectTypeOf(coordenada).toEqualTypeOf<[string, number]>();
});

test("3 · soloPares filtra los números pares", () => {
  expectTypeOf(soloPares).parameter(0).toEqualTypeOf<number[]>();
  expectTypeOf(soloPares).returns.toEqualTypeOf<number[]>();
  expect(soloPares([1, 2, 3, 4])).toEqual([2, 4]);
  expect(soloPares([1, 3, 5])).toEqual([]);
});
