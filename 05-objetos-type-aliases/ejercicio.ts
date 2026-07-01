// 05 · Objetos y type aliases
//
// Completar cada TODO. Correr `npm test` y dejar todo en verde.

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
