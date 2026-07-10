// 11 · Utility types (introducción)
//
// Completar cada TODO, del 1 (más simple) al 6 (más completo).
// Correr `npm test` y dejar todo en verde.

export type Usuario = {
  id: number;
  nombre: string;
  email: string;
};

export type Config = {
  host?: string;
  puerto?: number;
};

// 1. `UsuarioParcial`: un `Usuario` con TODAS las propiedades opcionales.
//    Usar `Partial`.
export type UsuarioParcial = unknown; // TODO

// 2. `UsuarioResumen`: solo `id` y `nombre` de `Usuario`. Usar `Pick`.
export type UsuarioResumen = unknown; // TODO

// 3. `SinId`: un `Usuario` sin la propiedad `id`. Usar `Omit`.
export type SinId = unknown; // TODO

// 4. `Inventario`: un objeto con claves de texto y valores numéricos
//    (ej. { manzanas: 3, peras: 5 }). Usar `Record`.
export type Inventario = unknown; // TODO

// 5. `ConfigCompleta`: una `Config` con TODAS las propiedades obligatorias.
//    Usar `Required`.
export type ConfigCompleta = unknown; // TODO

// 6. `actualizar` recibe un usuario y un objeto de cambios (cualquier
//    subconjunto de sus propiedades), y devuelve el usuario con los cambios
//    aplicados. Anotar `cambios` con `Partial<Usuario>` e implementar.
export function actualizar(usuario: Usuario, cambios: unknown): Usuario {
  return usuario; // TODO
}
