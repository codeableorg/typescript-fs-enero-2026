// Este archivo es la meta del ejercicio: valida tipos y comportamiento.
// Mostrará errores en rojo hasta completar `ejercicio.ts`; eso es lo esperado,
// no un fallo de los tests. No editar este archivo.

import { test, expect, expectTypeOf } from "vitest";
import {
  teclado,
  describirProducto,
  cuenta,
  empresa,
  total,
} from "./ejercicio";
import type { Usuario } from "./ejercicio";

type FormaProducto = { nombre: string; precio: number; disponible: boolean };

test("1 · Producto describe nombre, precio y disponible", () => {
  expectTypeOf(teclado).toEqualTypeOf<FormaProducto>();
});

test("2 · Usuario tiene nombre y email opcional", () => {
  expectTypeOf<Usuario>().toEqualTypeOf<{ nombre: string; email?: string }>();
});

test("3 · describirProducto arma el texto del producto", () => {
  expectTypeOf(describirProducto).parameter(0).toEqualTypeOf<FormaProducto>();
  expectTypeOf(describirProducto).returns.toEqualTypeOf<string>();
  expect(
    describirProducto({ nombre: "Teclado", precio: 120, disponible: true }),
  ).toBe("Teclado: $120");
});

test("4 · Cuenta tiene id de solo lectura y saldo", () => {
  expectTypeOf(cuenta).toEqualTypeOf<{ readonly id: number; saldo: number }>();
});

test("5 · Empresa tiene una sede anidada", () => {
  expectTypeOf(empresa).toEqualTypeOf<{
    nombre: string;
    sede: { ciudad: string; pais: string };
  }>();
});

test("6 · total suma los precios de los productos", () => {
  expectTypeOf(total).parameter(0).toEqualTypeOf<FormaProducto[]>();
  expectTypeOf(total).returns.toEqualTypeOf<number>();
  const productos: FormaProducto[] = [
    { nombre: "A", precio: 100, disponible: true },
    { nombre: "B", precio: 50, disponible: false },
  ];
  expect(total(productos)).toBe(150);
  expect(total([])).toBe(0);
});
