// Este archivo es la meta del ejercicio: valida tipos y comportamiento.
// Mostrará errores en rojo hasta completar `ejercicio.ts`; eso es lo esperado,
// no un fallo de los tests. No editar este archivo.

import { test, expect, expectTypeOf } from "vitest";
import {
  puntajes,
  coordenada,
  soloPares,
  mezcla,
  sumar,
  contarTipos,
} from "./ejercicio";

test("1 · puntajes es un array de números", () => {
  expectTypeOf(puntajes).toEqualTypeOf<number[]>();
});

test("2 · coordenada es la tupla [string, number]", () => {
  expectTypeOf(coordenada).toEqualTypeOf<[string, number]>();
});

test("3 · La función soloPares filtra los números pares", () => {
  expectTypeOf(soloPares).parameter(0).toEqualTypeOf<number[]>();
  expectTypeOf(soloPares).returns.toEqualTypeOf<number[]>();
  expect(soloPares([1, 2, 3, 4])).toEqual([2, 4]);
  expect(soloPares([1, 3, 5])).toEqual([]);
});

test("4 · La función mezcla es un array de string | number", () => {
  expectTypeOf(mezcla).toEqualTypeOf<(string | number)[]>();
});

test("5 · La función sumar suma todos los números", () => {
  expectTypeOf(sumar).parameter(0).toEqualTypeOf<number[]>();
  expectTypeOf(sumar).returns.toEqualTypeOf<number>();
  expect(sumar([1, 2, 3])).toBe(6);
  expect(sumar([])).toBe(0);
});

test("6 · contarTipos cuenta textos y números", () => {
  expectTypeOf(contarTipos).parameter(0).toEqualTypeOf<(string | number)[]>();
  expectTypeOf(contarTipos).returns.toEqualTypeOf<[number, number]>();
  expect(contarTipos(["a", 1, "b", 2, 3])).toEqual([2, 3]);
  expect(contarTipos([])).toEqual([0, 0]);
});
