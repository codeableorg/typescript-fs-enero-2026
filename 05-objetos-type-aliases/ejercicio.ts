// 05 · Objetos y type aliases
//
// Completar cada TODO, del 1 (más simple) al 6 (más completo).
// Correr `npm test` y dejar todo en verde.

// 1. Definir el type `Producto` con estas propiedades:
//    - nombre: texto
//    - precio: número
//    - disponible: booleano
export type Producto = unknown; // TODO

export const teclado: Producto = {
  nombre: "Teclado",
  precio: 120,
  disponible: true,
};

// 2. Definir el type `Usuario`: `nombre` (texto, obligatorio) y `email`
//    (texto, OPCIONAL: puede no estar).
export type Usuario = unknown; // TODO

// 3. `describirProducto` recibe un `Producto` y devuelve el texto
//    "<nombre>: $<precio>". Anotar el parámetro y el retorno, e implementar.
export function describirProducto(producto: unknown): unknown {
  return producto; // TODO
}

// 4. Definir el type `Cuenta`: `id` (número, de SOLO LECTURA con `readonly`) y
//    `saldo` (número, modificable).
export type Cuenta = unknown; // TODO

export const cuenta: Cuenta = { id: 1, saldo: 100 };

// 5. Definir el type `Empresa`: `nombre` (texto) y `sede`, que es a su vez un
//    objeto con `ciudad` (texto) y `pais` (texto).
export type Empresa = unknown; // TODO

export const empresa: Empresa = {
  nombre: "Acme",
  sede: { ciudad: "Lima", pais: "Perú" },
};

// 6. `total` recibe una lista de productos y devuelve la suma de sus precios.
//    Anotar el parámetro (una lista de `Producto`) y el retorno, e implementar.
export function total(productos: unknown): unknown {
  return 0; // TODO
}
