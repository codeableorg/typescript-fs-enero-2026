// Este archivo es la meta del ejercicio: valida tipos y comportamiento.
// Mostrará errores en rojo hasta completar `ejercicio.ts`; eso es lo esperado,
// no un fallo de los tests. No editar este archivo.

import { test, expect, expectTypeOf } from "vitest";
import { actualizar } from "./ejercicio";
import type {
  Usuario,
  UsuarioParcial,
  UsuarioResumen,
  SinId,
  Inventario,
  ConfigCompleta,
} from "./ejercicio";

test("1 · UsuarioParcial tiene todas las propiedades opcionales", () => {
  expectTypeOf<UsuarioParcial>().toEqualTypeOf<{
    id?: number;
    nombre?: string;
    email?: string;
  }>();
});

test("2 · UsuarioResumen es solo id y nombre", () => {
  expectTypeOf<UsuarioResumen>().toEqualTypeOf<{
    id: number;
    nombre: string;
  }>();
});

test("3 · SinId es Usuario sin id", () => {
  expectTypeOf<SinId>().toEqualTypeOf<{ nombre: string; email: string }>();
});

test("4 · Inventario mapea texto a número", () => {
  expectTypeOf<Inventario>().toEqualTypeOf<Record<string, number>>();
});

test("5 · ConfigCompleta tiene todas las propiedades obligatorias", () => {
  expectTypeOf<ConfigCompleta>().toEqualTypeOf<{
    host: string;
    puerto: number;
  }>();
});

test("6 · actualizar aplica los cambios sobre el usuario", () => {
  expectTypeOf(actualizar).parameter(1).toEqualTypeOf<Partial<Usuario>>();
  const u: Usuario = { id: 1, nombre: "Ana", email: "ana@x.com" };
  expect(actualizar(u, { nombre: "Luis" })).toEqual({
    id: 1,
    nombre: "Luis",
    email: "ana@x.com",
  });
  expect(actualizar(u, {})).toEqual(u);
});
