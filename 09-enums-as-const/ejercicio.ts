// 09 · Enums y as const
//
// Completar cada TODO, del 1 (más simple) al 6 (más completo).
// Correr `npm test` y dejar todo en verde.

// 1. Definir el enum de texto `Estado` con estos miembros y valores:
//    Pendiente = "pendiente", Enviado = "enviado", Entregado = "entregado".
export enum Estado {} // TODO

// 2. `siguienteEstado` avanza un pedido al siguiente estado:
//    Pendiente -> Enviado -> Entregado -> Entregado (Entregado se queda).
//    Anotar el parámetro y el retorno como `Estado`, e implementar.
export function siguienteEstado(estado: unknown): unknown {
  return estado; // TODO
}

// 3. `COLORES` debería tener valores literales, no `string`. Agregarle
//    `as const` para que TypeScript infiera los textos exactos.
export const COLORES = {
  Rojo: "rojo",
  Verde: "verde",
  Azul: "azul",
};

export type Color = (typeof COLORES)[keyof typeof COLORES];

// 4. A partir del objeto `ROLES` (ya con `as const`), definir el type `Rol`
//    como la unión de sus valores ("admin" | "user").
export const ROLES = {
  Admin: "admin",
  User: "user",
} as const;

export type Rol = unknown; // TODO

// 5. `esAdmin` recibe un `Rol` y devuelve true si es "admin". Anotar el
//    parámetro e implementar.
export function esAdmin(rol: unknown): boolean {
  return false; // TODO
}

// 6. `mensajePedido` recibe un `Estado` y devuelve un mensaje:
//    Pendiente -> "Tu pedido está pendiente"
//    Enviado -> "Tu pedido fue enviado"
//    Entregado -> "Tu pedido fue entregado"
//    Anotar el parámetro e implementar.
export function mensajePedido(estado: unknown): string {
  return String(estado); // TODO
}
