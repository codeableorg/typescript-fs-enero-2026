// Este archivo es la meta del ejercicio: valida tipos y comportamiento.
// Mostrará errores en rojo hasta completar `ejercicio.ts`; eso es lo esperado,
// no un fallo de los tests. No editar este archivo.

import { test, expect, expectTypeOf } from "vitest";
import {
  perro,
  empleado,
  describirAnimal,
  config,
  nombresDe,
} from "./ejercicio";
import type { Usuario } from "./ejercicio";

test("1 · Animal tiene nombre y patas", () => {
  expectTypeOf(perro).toEqualTypeOf<{ nombre: string; patas: number }>();
});

test("2 · Usuario tiene nombre y email opcional", () => {
  expectTypeOf<Usuario>().toEqualTypeOf<{ nombre: string; email?: string }>();
});

test("3 · Empleado extiende Persona con salario", () => {
  expectTypeOf(empleado).toEqualTypeOf<{ nombre: string; salario: number }>();
});

test("4 · describirAnimal describe al animal", () => {
  expectTypeOf(describirAnimal)
    .parameter(0)
    .toEqualTypeOf<{ nombre: string; patas: number }>();
  expectTypeOf(describirAnimal).returns.toEqualTypeOf<string>();
  expect(describirAnimal({ nombre: "Fido", patas: 4 })).toBe(
    "Fido tiene 4 patas",
  );
});

test("5 · Config tiene clave de solo lectura y activo", () => {
  expectTypeOf(config).toEqualTypeOf<{
    readonly clave: string;
    activo: boolean;
  }>();
});

test("6 · nombresDe devuelve los nombres de los empleados", () => {
  expectTypeOf(nombresDe)
    .parameter(0)
    .toEqualTypeOf<{ nombre: string; salario: number }[]>();
  expectTypeOf(nombresDe).returns.toEqualTypeOf<string[]>();
  const empleados = [
    { nombre: "Ana", salario: 1000 },
    { nombre: "Luis", salario: 1200 },
  ];
  expect(nombresDe(empleados)).toEqual(["Ana", "Luis"]);
  expect(nombresDe([])).toEqual([]);
});
