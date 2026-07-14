// 12 · Type queries
//
// Completar cada TODO, del 1 (más simple) al 6 (más completo).
// Correr `npm test` y dejar todo en verde.

// Tipo base para varios ejercicios.
export type Usuario = {
  id: number;
  nombre: string;
  email: string;
};

// 1. `config` ya existe como valor. Definir `Config` a partir de él, sin
//    repetir su forma. Usar `typeof`.
export const config = {
  host: "localhost",
  puerto: 8080,
};

export type Config = unknown; // TODO

// 2. `ClavesUsuario`: la unión de las claves de `Usuario`
//    ("id" | "nombre" | "email"). Usar `keyof`.
export type ClavesUsuario = unknown; // TODO

// 3. `Email`: el tipo de la propiedad `email` de `Usuario`. Usar acceso
//    indexado: Tipo["propiedad"].
export type Email = unknown; // TODO

// 4. `FRUTAS` es una tupla de solo lectura. `Fruta`: la unión de sus elementos.
//    Usar acceso indexado con `number`.
export const FRUTAS = ["manzana", "pera", "uva"] as const;

export type Fruta = unknown; // TODO

// 5. `ClaveColor`: la unión de las CLAVES de `COLORES`
//    ("Rojo" | "Verde" | "Azul"). Usar `keyof typeof`.
export const COLORES = {
  Rojo: "rojo",
  Verde: "verde",
  Azul: "azul",
} as const;

export type ClaveColor = unknown; // TODO

// 6. `Color`: la unión de los VALORES de `COLORES` ("rojo" | "verde" | "azul"),
//    combinando typeof, keyof y acceso indexado. Después, anotar `valorDe` para
//    que reciba una `ClaveColor` y devuelva un `Color`, e implementarla.
export type Color = unknown; // TODO

export function valorDe(clave: unknown): unknown {
  return clave; // TODO
}
