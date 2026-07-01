// Este archivo es la meta del ejercicio: valida tipos y comportamiento.
// Mostrará errores en rojo hasta completar `ejercicio.ts`; eso es lo esperado,
// no un fallo de los tests. No editar este archivo.

import { test, expect, expectTypeOf } from "vitest";
import { entrada, historial, registrar, fallar } from "./ejercicio";

test("1 · entrada es unknown, no any", () => {
  expectTypeOf(entrada).toEqualTypeOf<unknown>();
});

test("2 · registrar no devuelve valor (void) y agrega al historial", () => {
  expectTypeOf(registrar).returns.toEqualTypeOf<void>();
  const largoPrevio = historial.length;
  registrar("evento");
  expect(historial[largoPrevio]).toBe("evento");
});

test("3 · fallar nunca retorna (never) y lanza el error", () => {
  expectTypeOf(fallar).returns.toEqualTypeOf<never>();
  expect(() => fallar("boom")).toThrow("boom");
});
