// 06 · interface vs type
//
// Completar cada TODO, del 1 (más simple) al 6 (más completo).
// Correr `npm test` y dejar todo en verde.

// 1. Definir la interface `Animal` con `nombre` (texto) y `patas` (número).
export interface Animal {} // TODO

export const perro: Animal = { nombre: "Fido", patas: 4 };

// 2. Definir la interface `Usuario`: `nombre` (texto) y `email`
//    (texto, OPCIONAL: puede no estar).
export interface Usuario {} // TODO

// 3. Definir `Persona` con `nombre` (texto), y `Empleado`, que EXTIENDE
//    `Persona` y agrega `salario` (número).
export interface Persona {} // TODO
export interface Empleado extends Persona {} // TODO

export const empleado: Empleado = { nombre: "Ana", salario: 1000 };

// 4. `describirAnimal` recibe un `Animal` y devuelve "<nombre> tiene <patas>
//    patas". Anotar el parámetro y el retorno, e implementar.
export function describirAnimal(animal: unknown): unknown {
  return animal; // TODO
}

// 5. Definir la interface `Config`: `clave` (texto, de SOLO LECTURA con
//    `readonly`) y `activo` (booleano).
export interface Config {} // TODO

export const config: Config = { clave: "abc", activo: true };

// 6. `nombresDe` recibe una lista de empleados y devuelve una lista con sus
//    nombres. Anotar el parámetro y el retorno, e implementar.
export function nombresDe(empleados: unknown): unknown {
  return []; // TODO
}
