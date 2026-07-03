// Este archivo es la meta del ejercicio: valida tipos y comportamiento.
// Mostrará errores en rojo hasta completar `ejercicio.ts`; eso es lo esperado,
// no un fallo de los tests. No editar este archivo.

import { test, expect, expectTypeOf } from "vitest";
import {
  saludar,
  potencia,
  sumarTodos,
  restar,
  aplicar,
  mapear,
} from "./ejercicio";
import type { Operacion } from "./ejercicio";

test("1 · saludar tiene saludo opcional con 'Hola' por defecto", () => {
  expect(saludar("Ana")).toBe("Hola, Ana");
  expect(saludar("Ana", "Buenas")).toBe("Buenas, Ana");
});

test("2 · potencia usa exponente 2 por defecto", () => {
  expect(potencia(3)).toBe(9);
  expect(potencia(2, 3)).toBe(8);
});

test("3 · sumarTodos acepta una cantidad variable de números", () => {
  expect(sumarTodos(1, 2, 3)).toBe(6);
  expect(sumarTodos()).toBe(0);
});

test("4 · Operacion es una función (number, number) => number", () => {
  expectTypeOf<Operacion>().toEqualTypeOf<(a: number, b: number) => number>();
  expect(restar(10, 3)).toBe(7);
});

test("5 · aplicar aplica la función al valor", () => {
  expectTypeOf(aplicar).parameter(1).toEqualTypeOf<(n: number) => number>();
  expect(aplicar(5, (x) => x * 2)).toBe(10);
  expect(aplicar(4, (x) => x + 1)).toBe(5);
});

test("6 · mapear aplica la función a cada número", () => {
  expectTypeOf(mapear).parameter(1).toEqualTypeOf<(n: number) => number>();
  expect(mapear([1, 2, 3], (x) => x * 2)).toEqual([2, 4, 6]);
  expect(mapear([], (x) => x + 1)).toEqual([]);
});
