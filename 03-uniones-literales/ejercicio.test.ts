import { test, expect, expectTypeOf } from "vitest";
import { id, talla, describir } from "./ejercicio";

test("1 · id es la unión string | number", () => {
  expectTypeOf(id).toEqualTypeOf<string | number>();
});

test("2 · talla es la unión literal de tallas", () => {
  expectTypeOf(talla).toEqualTypeOf<"sm" | "md" | "lg">();
});

test("3 · describir distingue texto de número", () => {
  expectTypeOf(describir).parameter(0).toEqualTypeOf<string | number>();
  expect(describir("hola")).toBe(4);
  expect(describir("")).toBe(0);
  expect(describir(10)).toBe(20);
  expect(describir(0)).toBe(0);
});
