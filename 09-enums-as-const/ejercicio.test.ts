// Este archivo es la meta del ejercicio: valida tipos y comportamiento.
// Mostrará errores en rojo hasta completar `ejercicio.ts`; eso es lo esperado,
// no un fallo de los tests. No editar este archivo.

import { test, expect, expectTypeOf } from "vitest";
import {
  Estado,
  siguienteEstado,
  esAdmin,
  mensajePedido,
} from "./ejercicio";
import type { Color, Rol } from "./ejercicio";

test("1 · Estado tiene los tres valores de texto", () => {
  expect(Estado.Pendiente).toBe("pendiente");
  expect(Estado.Enviado).toBe("enviado");
  expect(Estado.Entregado).toBe("entregado");
});

test("2 · siguienteEstado avanza el pedido", () => {
  expectTypeOf(siguienteEstado).parameter(0).toEqualTypeOf<Estado>();
  expectTypeOf(siguienteEstado).returns.toEqualTypeOf<Estado>();
  expect(siguienteEstado(Estado.Pendiente)).toBe(Estado.Enviado);
  expect(siguienteEstado(Estado.Enviado)).toBe(Estado.Entregado);
  expect(siguienteEstado(Estado.Entregado)).toBe(Estado.Entregado);
});

test("3 · COLORES tiene valores literales (Color)", () => {
  expectTypeOf<Color>().toEqualTypeOf<"rojo" | "verde" | "azul">();
});

test("4 · Rol es la unión de los valores de ROLES", () => {
  expectTypeOf<Rol>().toEqualTypeOf<"admin" | "user">();
});

test("5 · esAdmin detecta el rol admin", () => {
  expectTypeOf(esAdmin).parameter(0).toEqualTypeOf<"admin" | "user">();
  expect(esAdmin("admin")).toBe(true);
  expect(esAdmin("user")).toBe(false);
});

test("6 · mensajePedido arma el mensaje según el estado", () => {
  expectTypeOf(mensajePedido).parameter(0).toEqualTypeOf<Estado>();
  expect(mensajePedido(Estado.Pendiente)).toBe("Tu pedido está pendiente");
  expect(mensajePedido(Estado.Enviado)).toBe("Tu pedido fue enviado");
  expect(mensajePedido(Estado.Entregado)).toBe("Tu pedido fue entregado");
});
