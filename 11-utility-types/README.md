# 11 · Utility types (introducción)

## El problema

Ya se tiene un type `Usuario`. Ahora hace falta "un usuario con todo opcional"
(para un formulario), "solo su id y nombre" (para una lista), "un usuario sin el
email" (para exponerlo público). Se podría escribir cada variante a mano, pero
TypeScript ya trae **utility types**: tipos que derivan uno nuevo a partir de
otro.

Se usan como genéricos: `Utility<TipoBase>`.

## Partial y Required

`Partial<T>` hace **todas** las propiedades opcionales; `Required<T>`, todas
obligatorias:

```ts
type Usuario = { id: number; nombre: string };

type UsuarioParcial = Partial<Usuario>;
// { id?: number; nombre?: string }

type Config = { host?: string };
type ConfigCompleta = Required<Config>;
// { host: string }
```

**Dónde se usan.** `Partial` es el tipo natural de una **edición**: un
formulario o un `PATCH` mandan solo los campos que cambiaron:

```ts
type Perfil = { nombre: string; bio: string; avatar: string };

function editarPerfil(actual: Perfil, cambios: Partial<Perfil>): Perfil {
  return { ...actual, ...cambios };
}

editarPerfil(perfil, { bio: "Dev full-stack" }); // ✅ un solo campo alcanza
editarPerfil(perfil, { edad: 30 }); // ❌ error: edad no existe en Perfil
```

`Required` aparece al **resolver defaults**: la entrada tiene opcionales, pero
después de mezclarla con los valores por defecto no queda ninguno — y
`Required` obliga a que los defaults cubran todo:

```ts
type Opciones = { host?: string; puerto?: number };

const DEFAULTS: Required<Opciones> = { host: "localhost", puerto: 8080 };

function conectar(opciones: Opciones) {
  const config = { ...DEFAULTS, ...opciones };
  config.host.toUpperCase(); // ✅ host ya no puede ser undefined
}
```

## Pick y Omit

`Pick<T, Claves>` se queda solo con las propiedades elegidas; `Omit<T, Claves>`
saca las indicadas:

```ts
type Usuario = { id: number; nombre: string; email: string };

type Resumen = Pick<Usuario, "id" | "nombre">;
// { id: number; nombre: string }

type SinEmail = Omit<Usuario, "email">;
// { id: number; nombre: string }
```

**Dónde se usan.** Son la herramienta para las **variantes de un contrato**:
cada pantalla o endpoint necesita su recorte del mismo tipo. La lista no
necesita todo (`Pick`); la respuesta pública no debe exponer campos sensibles
(`Omit`). Derivar las variantes del tipo base las mantiene sincronizadas — si
`Usuario` cambia, se actualizan (o avisan) solas:

```ts
type Usuario = { id: number; nombre: string; email: string; password: string };

// GET /usuarios: la tabla solo muestra dos columnas.
type FilaDeLista = Pick<Usuario, "id" | "nombre">;

// La respuesta de la API: la password no sale nunca, ni por accidente.
type UsuarioPublico = Omit<Usuario, "password">;

function aPublico(usuario: Usuario): UsuarioPublico {
  const { password: _password, ...publico } = usuario;
  return publico;
}
```

## Record

`Record<Claves, Valor>` describe un objeto con claves y valores de un tipo dado:

```ts
type Inventario = Record<string, number>;

const stock: Inventario = { manzanas: 3, peras: 5 };
```

**Dónde se usa.** Diccionarios e índices. Y con claves **literales** (en vez de
`string`) gana una propiedad extra: exige completitud —

```ts
type Rol = "admin" | "editor" | "lector";

// Un mapa de etiquetas para la UI. Si mañana aparece el rol "invitado",
// este objeto deja de compilar hasta que alguien agregue su etiqueta:
const ETIQUETAS: Record<Rol, string> = {
  admin: "Administrador",
  editor: "Editor",
  lector: "Solo lectura",
};

// El índice clásico: elementos agrupados por una clave.
type UsuariosPorRol = Record<Rol, Usuario[]>;
```

## Los tres juntos

En [el ejemplo integral](../ejemplo-integral-11-12-13/) estos utility types
aparecen combinados en un módulo real: variantes de un `Usuario` para lista,
respuesta pública y edición.

## Ejercicio

Abrir `ejercicio.ts` y completar cada `TODO`. Correr `npm test` y dejar los tests
en verde.
