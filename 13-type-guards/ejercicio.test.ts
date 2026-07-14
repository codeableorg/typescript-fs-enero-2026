// Este archivo es la meta del ejercicio: valida tipos y comportamiento.
// Mostrará errores en rojo hasta completar `ejercicio.ts`; eso es lo esperado,
// no un fallo de los tests. No editar este archivo.

import { test, expect, expectTypeOf } from "vitest";
import {
  esTexto,
  esPez,
  movimiento,
  assertEsTexto,
  gritar,
  esUsuario,
} from "./ejercicio";
import type { Pez, Usuario } from "./ejercicio";

test("1 · esTexto es un guard (valor is string)", () => {
  expectTypeOf(esTexto).guards.toEqualTypeOf<string>();
  expect(esTexto("a")).toBe(true);
  expect(esTexto(1)).toBe(false);
});

test("2 · esPez es un guard (mascota is Pez)", () => {
  expectTypeOf(esPez).guards.toEqualTypeOf<Pez>();
  expect(esPez({ nombre: "Nemo", nada: true })).toBe(true);
  expect(esPez({ nombre: "Piolín", vuela: true })).toBe(false);
});

test("3 · movimiento usa el guard para distinguir", () => {
  expect(movimiento({ nombre: "Nemo", nada: true })).toBe("nada");
  expect(movimiento({ nombre: "Piolín", vuela: true })).toBe("vuela");
});

test("4 · assertEsTexto es una aserción (asserts valor is string)", () => {
  expectTypeOf(assertEsTexto).asserts.toEqualTypeOf<string>();
  expect(() => assertEsTexto(5)).toThrow("No es un texto");
  expect(() => assertEsTexto("ok")).not.toThrow();
});

test("5 · gritar asevera y transforma", () => {
  expect(gritar("hola")).toBe("HOLA");
  expect(() => gritar(5)).toThrow("No es un texto");
});

test("6 · esUsuario valida un unknown como Usuario", () => {
  expectTypeOf(esUsuario).guards.toEqualTypeOf<Usuario>();
  expect(esUsuario({ id: 1, nombre: "Ana" })).toBe(true);
  expect(esUsuario({ id: "1", nombre: "Ana" })).toBe(false);
  expect(esUsuario({ id: 1 })).toBe(false);
  expect(esUsuario(null)).toBe(false);
  expect(esUsuario("texto")).toBe(false);
});
