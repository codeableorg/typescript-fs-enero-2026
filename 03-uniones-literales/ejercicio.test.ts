// Este archivo es la meta del ejercicio: valida tipos y comportamiento.
// Mostrará errores en rojo hasta completar `ejercicio.ts`; eso es lo esperado,
// no un fallo de los tests. No editar este archivo.

import { test, expect, expectTypeOf } from "vitest";
import {
  id,
  talla,
  describir,
  precioTalla,
  formatear,
  etiqueta,
} from "./ejercicio";

test("1 · id es la unión string | number", () => {
  expectTypeOf(id).toEqualTypeOf<string | number>();
});

test("2 · talla es la unión literal de tallas", () => {
  expectTypeOf(talla).toEqualTypeOf<"sm" | "md" | "lg">();
});

test("3 ·La función describir distingue texto de número", () => {
  expectTypeOf(describir).parameter(0).toEqualTypeOf<string | number>();
  expect(describir("hola")).toBe(4);
  expect(describir("")).toBe(0);
  expect(describir(10)).toBe(20);
  expect(describir(0)).toBe(0);
});

test("4 · La función precioTalla devuelve el precio de cada talla", () => {
  expectTypeOf(precioTalla).parameter(0).toEqualTypeOf<"sm" | "md" | "lg">();
  expect(precioTalla("sm")).toBe(10);
  expect(precioTalla("md")).toBe(20);
  expect(precioTalla("lg")).toBe(30);
});

test("5 ·La función formatear formatea texto y número", () => {
  expectTypeOf(formatear).parameter(0).toEqualTypeOf<string | number>();
  expect(formatear("hola")).toBe("HOLA");
  expect(formatear(5)).toBe("$5");
});

test("6 · La función etiqueta combina talla y disponibilidad", () => {
  expectTypeOf(etiqueta).parameter(0).toEqualTypeOf<"sm" | "md" | "lg">();
  expect(etiqueta("md", true)).toBe("md (disponible)");
  expect(etiqueta("lg", false)).toBe("lg (agotado)");
});
