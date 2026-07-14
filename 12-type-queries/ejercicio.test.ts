// Este archivo es la meta del ejercicio: valida tipos y comportamiento.
// Mostrará errores en rojo hasta completar `ejercicio.ts`; eso es lo esperado,
// no un fallo de los tests. No editar este archivo.

import { test, expect, expectTypeOf } from "vitest";
import { valorDe } from "./ejercicio";
import type {
  Config,
  ClavesUsuario,
  Email,
  Fruta,
  ClaveColor,
  Color,
} from "./ejercicio";

test("1 · Config se deriva del valor config con typeof", () => {
  expectTypeOf<Config>().toEqualTypeOf<{ host: string; puerto: number }>();
});

test("2 · ClavesUsuario es la unión de claves de Usuario", () => {
  expectTypeOf<ClavesUsuario>().toEqualTypeOf<"id" | "nombre" | "email">();
});

test("3 · Email es el tipo de la propiedad email", () => {
  expectTypeOf<Email>().toEqualTypeOf<string>();
});

test("4 · Fruta es la unión de los elementos de FRUTAS", () => {
  expectTypeOf<Fruta>().toEqualTypeOf<"manzana" | "pera" | "uva">();
});

test("5 · ClaveColor es la unión de claves de COLORES", () => {
  expectTypeOf<ClaveColor>().toEqualTypeOf<"Rojo" | "Verde" | "Azul">();
});

test("6 · Color es la unión de valores y valorDe la devuelve", () => {
  expectTypeOf<Color>().toEqualTypeOf<"rojo" | "verde" | "azul">();
  expectTypeOf(valorDe).parameter(0).toEqualTypeOf<"Rojo" | "Verde" | "Azul">();
  expectTypeOf(valorDe).returns.toEqualTypeOf<"rojo" | "verde" | "azul">();
  expect(valorDe("Rojo")).toBe("rojo");
  expect(valorDe("Azul")).toBe("azul");
});
