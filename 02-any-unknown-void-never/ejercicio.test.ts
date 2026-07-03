// Este archivo es la meta del ejercicio: valida tipos y comportamiento.
// Mostrará errores en rojo hasta completar `ejercicio.ts`; eso es lo esperado,
// no un fallo de los tests. No editar este archivo.

import { test, expect, expectTypeOf } from "vitest";
import {
  entrada,
  historial,
  registrar,
  fallar,
  nuncaTermina,
  inspeccionar,
  registrarVarias,
} from "./ejercicio";

test("1 · entrada es unknown, no any", () => {
  expectTypeOf(entrada).toEqualTypeOf<unknown>();
});

test("2 · registrar no devuelve valor (void) y agrega al historial", () => {
  expectTypeOf(registrar).returns.toEqualTypeOf<void>();
  const antes = historial.length;
  registrar("evento");
  expect(historial[antes]).toBe("evento");
});

test("3 · fallar nunca retorna (never) y lanza el error", () => {
  expectTypeOf(fallar).returns.toEqualTypeOf<never>();
  expect(() => fallar("boom")).toThrow("boom");
});

test("4 · nuncaTermina nunca retorna (never)", () => {
  expectTypeOf(nuncaTermina).returns.toEqualTypeOf<never>();
});

test("5 · inspeccionar recibe unknown y no devuelve nada (void)", () => {
  expectTypeOf(inspeccionar).parameter(0).toEqualTypeOf<unknown>();
  expectTypeOf(inspeccionar).returns.toEqualTypeOf<void>();
});

test("6 · registrarVarias agrega el mensaje varias veces", () => {
  expectTypeOf(registrarVarias).returns.toEqualTypeOf<void>();
  const antes = historial.length;
  registrarVarias("hey", 3);
  expect(historial.slice(antes)).toEqual(["hey", "hey", "hey"]);
});
